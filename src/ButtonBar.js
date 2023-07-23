export default function ButtonBar(props) {
    return (
        <nav>
            <button value={-5}>Way Back</button>
            <button value={-1}>Back</button>
            <button value={1}>Next</button>
            <button value={5}>Big Next</button>
        </nav>
    )
}