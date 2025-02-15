export default function Card(props) {

    // destrutturiamo l'oggetto ricevuto
    // const { src, title } = props.comicsInfo;

    return (
        <div className="comics-card">
            <img className="img-array" src={props.comicSrc} alt={props.comicTitle} />
            <h3>{props.comicTitle.toUpperCase()}</h3>
        </div>
    );
}
