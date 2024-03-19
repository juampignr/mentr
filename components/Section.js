import css from '../styles/dewey.module.css'
import { Context } from '../pages/_app';
import { useContext,useEffect,useState } from 'react';

export default function Section({children,name}){

  let ctx = useContext(Context)
  
  const [parentClass,setParentClass] = useState("visible")

  useEffect(() => {

    if(ctx.status != "showing sections"){

      setParentClass("section animate__animated animate__fadeOut")

    }else{

      setParentClass("section visible")

    }

  },[ctx.status])


  return(<div name={name} className={parentClass} style={{marginTop:"8vh"}} onAnimationEnd={()=> setParentClass("section invisible")}>
            <h2 className="normal-text">{children}</h2>
        </div>);
}