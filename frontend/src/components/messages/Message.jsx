import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';
const Message = ({message}) => {

  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromeMe=message.senderId===authUser._id;
  const chatclassname=fromeMe?'chat-end':' chat-start';
  const profileImage=fromeMe?authUser.profilePic:selectedConversation.profilePic;
  const bubblebgcolor=fromeMe?'bg-blue-500':'bg-gray-500';
  const formattedtime=extractTime(message.createdAt);
  const shakeclass=message.shouldShake?'shake':'';










  return (
    <div className={`chat ${chatclassname}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src={profileImage} />

            </div>

        </div>
        <div className={`chat-bubble text-white ${shakeclass}  ${bubblebgcolor} pb-2 `}>
            {message.message}
        </div>
        
        <div className='chat-footer opacity-50  text-white text-xs gap-1 items-center'>
            {formattedtime}
        </div>
    </div>
  )
}

export default Message