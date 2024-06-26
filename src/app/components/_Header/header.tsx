"use client"

import styles from "./header.module.css"
import ModalProfile from "../_ModalProfile/modalprofile"
import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types"

const Header = (props : any) => {

    const [nome, setNome] = useState();
    const [foto, setFoto] = useState();

    useEffect (() => {

        {
            setNome(props.name),        
            setFoto(props.photo)
        }
    })

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={"../logo.svg"} alt="" />
            <div className={styles.right}>
                <h1>{nome}</h1>
                <img className={styles.profilePic} src={foto} alt="" />
                <img className={styles.config} src="../cfg.svg" alt="" />
            </div>
        </div>
    )

}

Header.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
}

Header.defaultProps = {
    name: "Celso",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWmlNKUKoymXswfq_-Au2Qn7E74w-Y2jqF8Sb-tm8qEjbL7bwYkBJem86sNVbc-G8GYY&usqp=CAU"
}

export default Header