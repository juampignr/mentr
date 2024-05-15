import css from '../styles/dewey.module.css'
import { Context } from '../pages/_app';

export default function Section({children,name}){
  
  return(<div name={name} className="section animate__animated animate__fadeIn" style={{marginTop:"2rem"}}>
            <h2 className="normal-text">{children}</h2>
        </div>);
}