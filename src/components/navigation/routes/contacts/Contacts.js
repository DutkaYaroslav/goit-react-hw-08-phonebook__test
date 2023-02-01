// this file handle: add, delete, refresh contacts
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../store/Context";
import Card from "../../../UI/Card";
import AddForm from "./addForm/AddForm";
import styles from "./Item.module.css";


const Contacts = () => {
    const authContext = useContext(Context)
    const [itemsFetched, setItemsFethed] = useState([])

    const getAllContacts = async () => {
        let result =  await authContext.get()
        setItemsFethed(result)

    }
    useEffect(()=>{
        getAllContacts()
    },[])




    const removeItem = async (id) => {
        await authContext.delete(id)
        getAllContacts()
    }



const items = itemsFetched.map(el =>  <li key={el.id}>
    <div className={styles.contact}>
        <h3 className={styles.name}>{el.name}</h3>
        <div>
            <p className={styles.number}>{el.number}</p>
            <div className={styles.actions}>
                <button onClick={() => removeItem(el.id)}>delete</button>

            </div>
        </div>
    </div>

</li>)



    return(
        <Card>
            <AddForm update={getAllContacts}   />
            <ul>
                {items}
            </ul>
        </Card>
    )
}

export default Contacts