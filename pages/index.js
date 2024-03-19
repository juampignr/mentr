import styles from '../styles/dewey.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Pill from '../components/Pill'
import SearchBar from '../components/SearchBar'
import wiki from 'wikijs'
import useAsyncEffect from 'use-async-effect'
import { BeatLoader } from 'react-spinners'
import { Context,show } from './_app'
import { useRouter } from 'next/router'
import { useContext,useEffect,useState } from 'react'
import { Row,Column,Center } from '../components/Grid'


export default function Home() {
  
  const ctx = useContext(Context)

  const [pills,setPills] = useState([]) 
  
  useAsyncEffect(async () => {

    if(ctx.search){

      const query = await ctx.wiki().search(ctx.search)
        
      const results = query.results
      let pillsArray = []
      
      for (let index = 0; index < 20; index++) {

        if(index < results.length)
          pillsArray.push(<Pill>{results[index]}</Pill>)          

      }
      
      setPills(pillsArray)

      ctx.setStatus("showing pills")
    }
  },[ctx.search])

  
  useAsyncEffect(async () => {

    const pillsArray = []
    const interests = []
    const branchTitles = []
  
    let randomIndex = categories => { return Math.floor(Math.random() * categories.length) }
  
    const branches = await (await wiki().page('Branches of science')).content()

    const hobbies = ["Woodworking","Metalworking","Home improvement","Electronics","Sewing","Jewelry making","Carpentry","Pottery","Brewing","Gardening","Electronics","Robotics"]

    branches.forEach(branch => {
        
      if(!["External links","References","See also","Notes","Visualizations and metascience","Relationships between the branches"].includes(branch.title))
        branchTitles.push(branch.title)
  
      if(branch.items){
  
        const branchesLevel1 = branch.items
  
        branchesLevel1.forEach(branchLevel1=>{
  
          if(branchLevel1.content)
            branchTitles.push(branchLevel1.title)
  
          if(branchLevel1.items){
  
            const branchesLevel2 = branchLevel1.items
  
            branchesLevel2.forEach(branchLevel2=>{
  
              if(branchLevel2.content)
                branchTitles.push(branchLevel2.title)
            })
  
         
          }
        })
  
      }
    });
  
    while (interests.length < 20) {
      
      const randomBranchIndex = randomIndex(branchTitles)
      const randomHobbyIndex = randomIndex(hobbies)
  
      if(!interests.includes(branchTitles[randomBranchIndex])){
      
        interests.push(branchTitles[randomBranchIndex])
        pillsArray.push(<Pill>{branchTitles[randomBranchIndex]}</Pill>)          
      }
  
      if(!interests.includes(hobbies[randomHobbyIndex])){
  
        interests.push(hobbies[randomHobbyIndex])
        pillsArray.push(<Pill>{hobbies[randomHobbyIndex]}</Pill>)          
      }
    }
    
    setPills(pillsArray)
    ctx.setStatus("showing pills")

  }, [])
  
  return(
          <>
            <Row>
              <BeatLoader cssOverride={{marginTop:"50vh"}} color="#5cc6b5e6" size="20" loading={(ctx.status == "loading" ? true : false)}/>
              {pills}
            </Row>
            <SearchBar/>
          </>
        )

}