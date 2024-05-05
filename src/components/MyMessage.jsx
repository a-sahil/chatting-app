import React from 'react'
import { ConnectionBar } from 'react-chat-engine';
const MyMessage = ({message}) => {
  if(message.attachments && message.attachments.length > 0) {
    return (
      <div className='border border-red-800'>
        <img src={message.attachments[0].file}
        alt="message-attachments"
        className="message-image"
        style={{float:'right'}}
        />
      </div>
    );
  }
  return (
    <div className='message' style={{float: 'right' , marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'} }>
      {message.text}
    </div>
  )
}

export default MyMessage