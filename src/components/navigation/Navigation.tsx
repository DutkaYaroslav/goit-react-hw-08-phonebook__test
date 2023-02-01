import { NavLink, Link } from "react-router-dom";
import styles from './Navigation.module.css'
import {Context} from "../store/Context";
import {useContext} from "react";



const Navigation = ():JSX.Element => {
    const authContext = useContext(Context)



return (
    <>
        <header className={styles.header}>
            <Link to={'/'}><div className={styles.logo}>GoIT</div></Link>
            <nav>
                <ul>
                    {!authContext.isAuth &&  <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>}
                    {authContext.isAuth &&
                        <>
                            <li>
                                <NavLink to="/userprofile">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts">Contacts</NavLink>
                            </li>
                        </>
                    }
                </ul>

            </nav>
        </header>


    </>
)}


export default Navigation