
export default function Card( props ) {
    const { handleUpdate, item } = props;

    return(
        <div className="card"  data-testid="cardItem">
            <p>{item.text}</p>
            <div className="checkbox">
                {item.status === "TODO" && (
                    <div data-testid="checkbox">
                        <input type="checkbox" onClick={() => handleUpdate(item)} />
                    </div>
                )}
            </div>
        </div>
    )
}