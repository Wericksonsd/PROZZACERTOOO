"use client"

import styles from "./message.module.css"
import React,{ useState } from 'react'

const ChatInput = () => {

    const [mensagens, setMensagens] = useState();
    const [msgIpt, setMsgIpt] = useState();

    const DigitarTexto = (event : any) => {
        setMsgIpt(event.target.value)
    }

    const EnviarMsg = () => {
        
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