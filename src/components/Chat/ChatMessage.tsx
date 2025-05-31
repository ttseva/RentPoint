import React from 'react';
import { Message, ChatUser } from '../../types/chat';
import avatarSmall from '../../assets/images/avatar__small.png';
import './Chat.css';

interface ChatMessageProps {
    message: Message;
    user: ChatUser;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, user }) => {
    return (
        <div className={`chat-message ${message.isOwn ? 'chat-message--own' : ''}`}>
            <div className="chat-message__avatar">
                {message.isOwn ? (
                    <img src={avatarSmall} alt="You" className="chat-message__avatar-image" />
                ) : user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="chat-message__avatar-image" />
                ) : (
                    <div className="chat-message__avatar-placeholder">
                        {user.name[0]}
                    </div>
                )}
            </div>
            <div className="chat-message__content">
                {!message.isOwn && (
                    <div className="chat-message__author">{user.name}</div>
                )}
                <div className="chat-message__text">{message.text}</div>
            </div>
        </div>
    );
}; 