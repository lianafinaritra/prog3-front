import {useRef, useState} from "react";
import './Todo.css';
import '../index.css';
import Input from "./Input";
import List from "./List";

export default function Todo(){
    const refText = useRef(null);
const [tab, setTab ] = useState([]);
const [id, setId] = useState(0);

function handleLoad(e) {
    e.preventDefault();
    setId(id + 1)
    let item = {
        id: id,
        text : refText.current.value,
        status : "TODO",
    }
    setTab(prevState => {
        return [...prevState, item]
    })
}

    function handleUpdate(item) {
        let updatedTab = tab.map(obj => {
            if (obj.id === item.id) {
                return {...obj, status: "DONE"};
            }
            return obj;
        });
        setTab(updatedTab);
    }

return(
        <>
        <div className="header" data-testid="header">
                <Input refText={refText} handleLoad={handleLoad}/>
        </div>

            <div className='list-container' data-testid="list-container">
                <List handleUpdate={handleUpdate} tab={tab} cardStatus="TODO"/>
                <List handleUpdate={handleUpdate} tab={tab} cardStatus="DONE"/>
            </div>
        </>
    );
}