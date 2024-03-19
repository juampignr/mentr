import styles from 'styles/dewey.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Pill from 'components/Pill'
import Card from 'components/Card'
import SearchBar from 'components/SearchBar'
import { Context } from 'pages/_app';
import { useContext,useEffect,useState } from 'react';
import { Row,Column,Center } from 'components/Grid';

export default function Surface() {
  
  const ctx = useContext(Context)
  const [pills,setPills] = useState("loading...") 

  useEffect(() => {

    if(ctx.status != "loaded" && ctx.status != "typed"){

      ctx.wiki().search(ctx.status).then(query => {
        
        const results = query.results
        let pillsArray = []
        
        for (let index = 0; index < 20; index++) {

          if(index < results.length)
            pillsArray.push(<Pill topic={results[index]}>{results[index]}</Pill>)          
        }
        
        setPills(pillsArray)
      })
    }
  },[ctx.status])

  return(
          <Center>
            <Column>{pills}</Column>
            <SearchBar/>
          </Center>
        )

}
