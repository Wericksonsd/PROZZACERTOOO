"use client"

import styles from "./chat.module.css"
import React,{useState, useEffect} from 'react'
import Message from "../_Message/[slug]/page"
import PropTypes from 'prop-types'

const ChatBox = (props : any) => {

    const [nome, setNome] = useState();
    const [pfPic, setPfPic] = useState();
    const [msg, setMsg] = useState();
    const [userId, setUserId] = useState();

    useEffect (() => {

        {
            setNome(props.name),
            setPfPic(props.photo),
            setMsg(props.status),
            setUserId(props.id)
        }

    },[])

    const OpenMsg = () => {
        <Message
        idUser={userId}/>
        console.log("Open message for user ID:", userId);
    }

    return (
        <div className={ styles.containerBox} onClick={OpenMsg}>
            <div className={ styles.profilePhoto}>
                <img src={pfPic} alt="userphoto" />
            </div>
            <div className={styles.caixaMsg}>
                <h2>{nome}</h2>
                <div className={styles.textdate}>
                    <h4>{msg}</h4>
                </div>
            </div>
        </div>
    )

}

ChatBox.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number
}

ChatBox.defaultProps = {
    name: "Usuário",
    photo: "https://conteudo.imguol.com.br/c/entretenimento/78/2021/01/06/celso-portiolli-publicou-foto-no-instagram-1609967996685_v2_1045x1045.jpg",
    status: "O porfdgdgdfgra"
}

export default ChatBox
