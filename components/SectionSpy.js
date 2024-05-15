import css from '../styles/dewey.module.css'
import { Context,show } from '../pages/_app';
import { useContext,useEffect,useState } from 'react';

export default function SectionSpy({children}){

  let ctx = useContext(Context)
  const [title,setTitle] = useState(children)
  const [titleClass,setTitleClass] = useState("flashy-text")

  useEffect(() => {

    if(ctx.status.includes("update spy")){

      console.log(ctx.status)

      const newTitle = ctx.status.split(":")[1]
      setTitle(newTitle)
      setTitleClass("flashy-text animate__animated animate__fadeInDown")
    }

  },[ctx.status])


  return(<div className="spy" style={{marginTop:"8vh"}}>
            <h1 className={titleClass} onAnimationEnd={()=>{ setTitleClass("flashy-text")}}>{title}</h1>
        </div>);
}