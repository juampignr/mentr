import styles from '/styles/dewey.module.css'
import Pill from 'components/Pill'
import Card from 'components/Card'
import SearchBar from 'components/SearchBar'
import useAsyncEffect from 'use-async-effect';
import SwipeableViews from 'react-swipeable-views';
import { BeatLoader } from 'react-spinners';
import { Context,show } from 'pages/_app';
import { useContext,useEffect,useState,startTransition } from 'react'
import { useRouter } from 'next/router'
import { Row,Column,Center } from 'components/Grid';


export default function Shallow() {
  
  const router = useRouter()

  let once = {'loading':true}

  const ctx = useContext(Context)
  
  const [pills,setPills] = useState([]) 

  const [loadedIndex,setLoadedIndex] = useState([])  
  const [relatedTopics,setRelatedTopics] = useState([])  
  const [swipeStructure,setSwipeStructure] = useState([])
  const [pending,setPending] = useState(true) 

  const initSwipeStructure = relatedTopics => {
        
    relatedTopics.forEach(topic=> {

      ctx.wiki().page(topic).then(page=>{
          page.summary().then(summary=>{

            setSwipeStructure(arr=> [...arr,[<Card>{[page.title,summary.substring(0,600)+"..."]}</Card>]]) 

            if(relatedTopics.indexOf(topic) == relatedTopics.length -1)
              ctx.setStatus("swipe structure")

          })
      })
    })

  }

  const updateSwipeStructure = async (topic,index) => {

    let pagesArray = []
    let swipeStructureCopy = Object.assign([],swipeStructure)
    

    try{

      if(loadedIndex.indexOf(index) == -1){

        const search = await ctx.wiki().search(topic,99)

        pagesArray = search.results

        pagesArray.forEach(async (page) => {
          
          const summary = await (await ctx.wiki().page(page)).summary() 
          
          swipeStructureCopy[index].push(<Card>{[page,summary.substring(0,600)+"..."]}</Card>)

          setSwipeStructure(swipeStructureCopy)
          setLoadedIndex(arr=>[...arr,index])

          if(pagesArray.indexOf(page) == 98){

            setPending(false)
            ctx.setStatus("showing cards")        
          }
          
        });
      }
      
    }catch(error){

      ctx.setStatus("error:"+error.stack)
    }
  }

  useAsyncEffect(async () => {

    const currentTopic = decodeURIComponent(window.location.pathname.replace("/shallow/",""))
    
    if(ctx.search && ctx.status == "typing"){

      try{

        const query = await ctx.wiki().search(ctx.search,20)
        const results = query.results

        isPending = true

        setPills([])

        let pillsArray = []
        
        results.forEach((element)=> pillsArray.push(<Pill>{results[index]}</Pill>))

        setPills(pillsArray)

        ctx.setStatus("showing pills")

        isPending = false
      
      }catch(error){

        ctx.setStatus("error:"+error.stack)
      }

    }else if(ctx.status.indexOf("loading") != -1 && once["loading"]){
      

      try{

          once["loading"] = false

          const results = await ctx.wiki().search(currentTopic,9)
          
          setRelatedTopics([currentTopic,...results.results])
          
          initSwipeStructure([currentTopic,...results.results])
          
        
      }catch(error){

        ctx.setStatus("error:"+error.stack)
      }

    }else if(ctx.status == "swipe structure"){


      updateSwipeStructure(currentTopic,0)  
    }

  },[ctx.status])

  return(
          <>
            <Row>
              {pills}
              <BeatLoader cssOverride={{marginTop:"50vh"}} color="#5cc6b5e6" size="20" loading={pending}/>
            </Row>

            <SwipeableViews onChangeIndex={(index,indexLatest,meta)=>{
              startTransition(()=> updateSwipeStructure(relatedTopics[index],index))
            }}>
              {swipeStructure.map(swipes=> <Column>{swipes}</Column>)}  
            </SwipeableViews>

            <SearchBar/>
          </>
        )

}
