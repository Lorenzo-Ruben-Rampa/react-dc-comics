export default function Card(props) {

    // destrutturiamo l'oggetto ricevuto
    // const { src, title } = props.comicsInfo;

    return (
        <div className="comics-card">
            <img src={props.comicSrc} alt={props.comicTitle} />
            <h3>{props.comicTitle}</h3>
        </div>
    );
}
