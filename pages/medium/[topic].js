import Link from 'next/link';
import SearchBar from 'components/SearchBar'
import Section from 'components/Section'
import useAsyncEffect from 'use-async-effect';
import { Row } from 'components/Grid'
import { useRouter } from 'next/router';
import { useContext,useEffect,useState } from 'react';
import { Context, show } from 'pages/_app';
import { BeatLoader } from 'react-spinners';
import SectionSpy from 'components/SectionSpy';


export default function Medium() {
    
    const ctx = useContext(Context)
    
    const [loading,setLoading] = useState(false)
    const [title,setTitle] = useState()
    const [summary,setSummary] = useState()
    const [page,setPage] = useState([])

    const router = useRouter()

    show(router)

    const initPage = async () => {
        
        let title = decodeURIComponent(window.location.pathname.replace("/medium/",""))
        setTitle(title)

        let sectionsArray = []
        let pageArray = []

        const titleRegex = /^\s.*\s$/i

        let content = await (await ctx.wiki().page(title)).content()
        const links = await (await ctx.wiki().page(title)).links()

        
        ctx.setStatus(`update spy:${content[0].title}`)
        setSummary(content[0].content)

        delete content[0]

        content.forEach(element=>{

            if(!["See also","References","Further reading","External links"].includes(element.title) && element.content)
                pageArray.push({title:element.title,content:element.content})

            if(element.hasOwnProperty("items")){

                element.items.forEach(item=>{

                    if(item.content)
                        pageArray.push({title:item.title,content:item.content})
                })
            }
        })

        setPage(pageArray)
        ctx.setStatus("showing sections")
    };

    useAsyncEffect(async () => {

        if(loading){

            await initPage()
            setLoading(false)
        }

    },[loading])

    useEffect(() => {

        const sections = document.querySelectorAll(".section")

        const observer = new IntersectionObserver((entries,observer) => {
                
                for(const entry of entries){
                    if(entry.isIntersecting){
                        
                        ctx.setStatus(`update spy:${entry.target.getAttribute("name")}`)
                    }
                }
        }, {threshold:0.1})

        sections.forEach((section) => observer.observe(section))

    },[page])

    useEffect(() => {

        setLoading(true)
    },[])

    return(
    <>
        <Row>
            <SectionSpy>
                {title}
            </SectionSpy>
        </Row>

        <Row>
            <h2 className="normal-text" style={{display:ctx.status == "typing" || ctx.status == "showing pills" ? "none" : "block"}}>{summary}</h2>
        </Row>

        <Row>
            {
                page.map(element => <Section name={element.title}>{element.content}</Section>)
            }
        </Row>

        <SearchBar/>
    </>
    )

}