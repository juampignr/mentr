import css from '../styles/dewey.module.css'
import { Context } from '../pages/_app';
import { useContext,useEffect,useState } from 'react';

export default function SectionSpy({children}){

  let ctx = useContext(Context)
  
  const [parentClass,setParentClass] = useState("visible")

  useEffect(() => {

    setParentClass("spy visible")

    if(ctx.status.indexOf("update spy") != -1){

      console.log(ctx.status)

      const newTitle = ctx.status.split(":")[1]
      children = [newTitle]
    }

  },[ctx.status])


  return(<div className={parentClass} style={{marginTop:"8vh"}} onAnimationEnd={()=> setParentClass("spy invisible")}>
            <h1 className="flashy-text">{children}</h1>
        </div>);
}