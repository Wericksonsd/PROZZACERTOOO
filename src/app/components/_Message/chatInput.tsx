"use client"

import styles from "./message.module.css"
import React,{ useState } from 'react'
import { newMessage } from "@/app/db/messagesDB"

const ChatInput = (props : any) => {

    const [mensagens, setMensagens] = useState();
    const [msgIpt, setMsgIpt] = useState();
    const [id, setId] = useState(props.id);

    const DigitarTexto = (event : any) => {
        setMsgIpt(event.target.value)
    }

    const EnviarMsg = () => {
        const newMsg = {
            name: {msgIpt},
            data: new Date().getHours(),
            senderP: true
        };

        newMessage(id, newMsg)
    }

    return(

        <div className={styles.inputsField}>
            <input title="message"
                    type="text"
                    placeholder="Digite a Mensagem"
                    onChange={DigitarTexto} />
            <img onClick={EnviarMsg} className={styles.send} src="../send.svg" alt="" />
        </div>

    )
}

export default ChatInput