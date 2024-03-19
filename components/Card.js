import css from '../styles/dewey.module.css'
import Link from 'next/link'
import { Context,show } from '../pages/_app';
import { useRouter } from 'next/router';
import { useContext,useEffect,useState } from 'react';

export default function Card({children}){

  let ctx = useContext(Context)
  let [parentClass,setParentClass] = useState("visible")
  
  let router = useRouter()

  const handleClick = (event) =>{

    event.preventDefault()    
    
    setTimeout(() => {

      ctx.setStatus(`loading: ${event.target.getAttribute("title")}`)

      router.push(`/medium/${encodeURIComponent(event.target.parentNode.getAttribute("title"))}`)

    }, 500)

  }

  useEffect(() => {

    if(ctx.status != "showing cards"){

      setParentClass("animate__animated animate__fadeOut")

    }else{

      setParentClass("visible")

    }

  },[ctx.status])


  return(<div className={parentClass} onAnimationEnd={()=> setParentClass("invisible")}><div className={css.card} onClick={handleClick} title={children[0]}><h1>{children[0]}</h1><h2>{children[1]}</h2></div></div>);
}