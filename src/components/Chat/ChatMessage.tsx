import React from 'react';
import { Message, ChatUser } from '../../types/chat';
import './Chat.css';

interface ChatMessageProps {
    message: Message;
    user: ChatUser;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, user }) => {
    return (
        <div className={`chat-message ${message.isOwn ? 'chat-message--own' : ''}`}>
            {!message.isOwn && (
                <div className="chat-message__avatar">
                    {user.avatar ? (
                        <img src={user.avatar} alt={user.name} />
                    ) : (
                        <div className="chat-message__avatar-placeholder">
                            {user.name[0]}
                        </div>
                    )}
                </div>
            )}
            <div className="chat-message__content">
                {!message.isOwn && (
                    <div className="chat-message__author">{user.name}</div>
                )}
                <div className="chat-message__text">{message.text}</div>
            </div>
            {message.isOwn && (
                <div className="chat-message__avatar">
                    <div className="chat-message__avatar-placeholder chat-message__avatar-placeholder--own">
                        You
                    </div>
                </div>
            )}
        </div>
    );
}; 