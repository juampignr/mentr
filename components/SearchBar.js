import css from '../styles/dewey.module.css'
import { Context } from '../pages/_app';
import { useRef,useEffect,useContext } from 'react';

export default function SearchBar({children}){

  const ref = useRef(null);
  const ctx = useContext(Context);
  let timeout = null;

  const handleTyping = event => {

    clearTimeout(timeout)

    timeout = setTimeout(() => {

        ctx.setSearch(event.target.value)  

        if(ctx.status != "typing")
          ctx.setStatus("typing")

    },1500)
  };

  return(<div className={css.searchBar}><input onKeyDown={handleTyping} type="text" placeholder="What's your interest?"/></div>);

}
