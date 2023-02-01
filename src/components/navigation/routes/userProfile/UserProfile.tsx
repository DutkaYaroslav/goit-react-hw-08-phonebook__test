import styles from './UserProfile.module.css';
import {Context} from "../../../store/Context";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const UserProfile = () => {
    let [email, setEmail] = useState('')
    useEffect(() => {
        let isEmail = localStorage.getItem('email')

        if(!isEmail) return
        setEmail(isEmail)


    }, [email])

    const navigate = useNavigate()

    const authContext = useContext(Context)

    const logoutHandler = () => {
        authContext.logout()
        navigate('/login')
    }

    return (
        <section className={styles.profile}>
            <h1>{`Welcome back, ${email}`}</h1>
            <div className={styles.actions}>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </section>
    );
};

export default UserProfile;
