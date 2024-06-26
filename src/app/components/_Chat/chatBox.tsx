"use client"

import styles from "./chat.module.css"
import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ChatBox = (props : any) => {

    const [nome, setNome] = useState();
    const [pfPic, setPfPic] = useState();
    const [msg, setMsg] = useState();
    const [data, setData] = useState();

    useEffect (() => {

        {
            setNome(props.name),
            setPfPic(props.photo),
            setMsg(props.message),
            setData(props.date)
        }

    })

    return (
        <div className={ styles.containerBox}>
            <div className={ styles.profilePhoto}>
                <img src={pfPic} alt="userphoto" />
            </div>
            <div className={styles.caixaMsg}>
                <h2>{nome}</h2>
                <div className={styles.textdate}>
                    <h4>{msg}</h4>
                    <p>{data}</p>
                </div>
            </div>
        </div>
    )

}

ChatBox.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
}

ChatBox.defaultProps = {
    name: "Usuário",
    photo: "https://conteudo.imguol.com.br/c/entretenimento/78/2021/01/06/celso-portiolli-publicou-foto-no-instagram-1609967996685_v2_1045x1045.jpg",
    message: "O porfdgdgdfgra",
    date: "12:00",
}

export default ChatBox