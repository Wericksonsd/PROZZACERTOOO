import styles from "./chat.module.css"
import ChatBox from "./chatBox"

const Chat = () => {

    return (
        <div  className={styles.container}>
            <ChatBox/>
        </div>
    )

}

export default Chat