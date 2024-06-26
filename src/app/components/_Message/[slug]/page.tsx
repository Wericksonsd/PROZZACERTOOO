import styles from "../message.module.css"
import ChatInput from "../chatInput"
import MsgHistory from "../msgHistoy"

const Message  = (props:any) => {

    let idUser = props.id

    return (
        <div className={styles.container}>
            <ChatInput/>
            <MsgHistory
            id= {idUser}/> 
        </div>
    )

}

export default Message