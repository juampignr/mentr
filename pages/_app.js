import '../styles/globals.css'
import wiki from 'wikijs';
import chalk from "chalk"
import { createContext,useState,useEffect } from 'react';

export function show (arg){

  switch(typeof arg){

      case "string":

          console.log(chalk.inverse(arg))
          break

      case "object":

          console.log(arg)
          break
      
      case "function":

          console.log(arg)
          break
      
      default:

          console.log(chalk.bold(arg))
          break
  }

}

export function debug (arg){

  switch(typeof arg){

      case "string":

          console.log(chalk.red.underline(arg))
          break

      case "object":

          console.log(arg)
          break

      case "function":

          console.log(arg)
          break
      
      default:

          console.log(chalk.red.underline(arg))
          break
  }

}

export function warn (arg){

  switch(typeof arg){

      case "string":

          console.log(chalk.bgRed.inverse(arg))
          break

      case "object":

          console.log(arg)
          break
      
      case "function":

          console.log(arg)
          break

      default:

          console.log(chalk.bgRed(arg))
          break
  }

}

export const Context = createContext();

function App({ Component,pageProps }) {
  
  const [chain,setChain] = useState({curiosityChain:{}});
  const [status,setStatus] = useState("loading")
  const [search,setSearch] = useState("")

  useEffect(() => {

    if(status.indexOf("error") != -1){

      console.log(status)
      //If dev do something, if prod do another thing

    }
  },[status])

  return (  
            <Context.Provider value={{chain:chain, setChain:setChain, wiki:wiki, status:status, setStatus:setStatus, search:search, setSearch:setSearch}}>
              <Component {...pageProps}/>
             </Context.Provider>
          )
}

export default App
