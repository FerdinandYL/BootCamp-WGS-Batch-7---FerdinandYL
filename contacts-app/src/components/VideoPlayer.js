export default function VideoPlayer({embedHtml}){
    return <div dangerouslySetInnerHTML={{__html:embedHtml}}/>
}