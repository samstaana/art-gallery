export default function Gallery(props) {
    return (
        <div>
            <h1>{ props.title }</h1>
            <h2>{ props.medium }</h2>
            <p>{ props. culture }</p>
            <img 
                style = {{ 'width': '80vw' }} 
                src = {props.primaryImage} 
                alt = { props.title } />
        </div>
    )
}