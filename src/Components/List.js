import Card from "./Card";

export default function List( props ) {
    const { handleUpdate, tab, cardStatus } = props;

    return(
        <div className="card-container" data-testid="list">
            {
                tab.filter(item => item.status === cardStatus).map((elt, k)=>(
                    <Card item={elt} handleUpdate={handleUpdate} key={k} />
                ))
            }
        </div>
    )
}