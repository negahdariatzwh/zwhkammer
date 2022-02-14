import { createContext, useState, useEffect } from "react";
import Api from "../page/Api";
import { useParams } from "react-router";
import DynamicService from "../service/DynamicService";


export const PageApiContenxt = createContext();

function Provider() {
    const params = useParams();
    const [editForm, seteditForm] = useState();
    const [addForm, setaddForm] = useState();
    const [showTrash, setshowTrash] = useState();
    const [showList, setshowList] = useState(true);
    const [parent, setparent] = useState([]);
    const [refreshList, setRefreshList] = useState();
    const [refreshTrash, setrefreshTrash] = useState();
    const [paramId, setparamId] = useState(params.id);
    useEffect(() => {
        if (paramId) {
            DynamicService.getId("kammer", "api", paramId).then((response) => {
                setparent(response.success);
            });
        }

    }, []);
    return (
        <PageApiContenxt.Provider
            value={{
                editForm,
                seteditForm,
                addForm,
                setaddForm,
                showTrash,
                setshowTrash,
                showList,
                setshowList,
                parent,
                setparent,
                refreshList,
                setRefreshList,
                refreshTrash,
                setrefreshTrash,
                paramId,
                setparamId
            }}
        >
            <Api />
        </PageApiContenxt.Provider>
    );
}

export default Provider;