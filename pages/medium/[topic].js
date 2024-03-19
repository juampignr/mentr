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

        show(content)
        show(links)
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

        show(ctx.status)
        if(ctx.status.includes("loading")){

            await initPage()

        }

    },[ctx.status])

    useEffect(() => {

        const sections = document.querySelectorAll(".section")
        console.log(sections);

        const observer = new IntersectionObserver((entries) => {
                for(const entry of entries){
                    if(entry.isIntersecting){
                        
                        ctx.setStatus(`update spy:${entry.target.getAttribute("name")}`)
                    }
                }
        });

        sections.forEach((section) => observer.observe(section))

    },[page])

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