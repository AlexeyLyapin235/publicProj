import React from "react";
import ButtonTocart from "./UI/buttons/ButtonTocart";
import InputAdd from "./UI/input/InputAdd";
import cl from './Chat.module.css'
import DeleteButton from "./UI/buttons/DeleteButton";


const Chat  =  ({message,setMessage,addMessages,messages,closeChat}) => {

    return(
        <div className={cl.blockChat}>
            <div className={cl.closeChat}>

            <DeleteButton onClick={closeChat} ></DeleteButton>
            </div>
            <div className={cl.blockMessage}>
            {messages.map((el)=>
                <div className={cl.messageUser} key={el.id}>
              <img className={cl.chatUserImage} src="data:image/png;base64,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" alt="Avatar"/>
              <p>{el.emai}:  </p>  
              <p className={cl.mesages}>{el.mesages}</p>
                </div>
            )}
            
            </div>
            <div className={cl.blockForm}>
            <InputAdd value={message} onChange={(event) => setMessage(event.target.value)}></InputAdd>
            <ButtonTocart onClick={addMessages}>Отправить</ButtonTocart>
            </div>
        </div>
    )
}
export default Chat