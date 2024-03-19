import css from '../styles/dewey.module.css'
import PropTypes from "prop-types";
import { Context } from '../pages/_app';
import { useRouter } from 'next/router'
import { useContext,useEffect,useState } from 'react';


export default function Pill({children}){

  const router = useRouter()

  let ctx = useContext(Context)
  let [parentClass,setParentClass] = useState("visible")
  
  useEffect(() => {

    if(ctx.status != "showing pills"){

      setParentClass("animate__animated animate__fadeOut")

    }else{
      
      setParentClass("visible")
    }

  },[ctx.status])

  const handleClick = (event) =>{

    event.preventDefault()    
    
    setTimeout(() => {

      ctx.setStatus(`loading: ${event.target.innerHTML}`)

      router.push(`/shallow/${encodeURIComponent(event.target.innerHTML)}`)
    }, 500)
   
  }
  
  return(<div className={parentClass} onAnimationEnd={()=> setParentClass("invisible")}><div className={css.pill} onClick={handleClick}>{children}</div></div>);
}

Pill.propTypes = {
  children: PropTypes.string.isRequired
};

