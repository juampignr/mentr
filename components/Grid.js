import css from '../styles/dewey.module.css'

export function Row({children}){

    return(<div className={css.row}>{children}</div>);
}
  
export function Column({children}){

    return(<div className={css.column}>{children}</div>);
}

export function Center({children}){

    return(<div className={css.center}>{children}</div>);
}

/*
export function Column({children}) {

const style = "display: flex; flex-direction: row;"

return(<div style={display: "flex", flex-direction: "row"}>{children}</div>);
}

export function Center({children}){

const style = "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;"

return(<div style={style}>{children}</div>);
}

*/