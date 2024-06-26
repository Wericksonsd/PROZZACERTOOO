"use client"

import styles from "./config.module.css"
import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types"

const Config = (props : any) => {


    const [nome, setNome] = useState();    
    const [foto, setFoto] = useState();
    const [status, setStatus] = useState();

    useEffect (() => {

    {
        setNome(props.name),        
        setFoto(props.photo),
        setStatus(props.desc)
    }

})


    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <img className={styles.profilePic} src={foto} alt="" />
                <h1>{nome}</h1>
                <h3>{status}</h3>
            </div>
            <div className={ styles.buttons }>
                <button type="button" className={styles.block}>AAAAA</button>
                <button type="button" className={styles.delete}>BBBBB</button>
            </div>

        </div>
    )
}

Config.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    desc: PropTypes.string,
    administrator: PropTypes.bool
}

Config.defaultProps = {
    name: "Celso",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWmlNKUKoymXswfq_-Au2Qn7E74w-Y2jqF8Sb-tm8qEjbL7bwYkBJem86sNVbc-G8GYY&usqp=CAU",
    desc: "Tirando carteira de piloto",
    administrator: true,
}

export default Config