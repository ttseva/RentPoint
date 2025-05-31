import React from 'react';
import { Chat } from '../../types/chat';
import './Chat.css';

interface ChatListProps {
    chats: Chat[];
    activeChat?: string;
    onChatSelect: (chatId: string) => void;
}

export const ChatList: React.FC<ChatListProps> = ({ chats, activeChat, onChatSelect }) => {
    return (
        <div className="chat-list">
            <h2 className="chat-list__title">Последние чаты</h2>
            <div className="chat-list__items">
                {chats.map(chat => (
                    <div 
                        key={chat.id}
                        className={`chat-list__item ${chat.id === activeChat ? 'chat-list__item--active' : ''}`}
                        onClick={() => onChatSelect(chat.id)}
                    >
                        <div className="chat-list__avatar">
                            {chat.user.avatar ? (
                                <img src={chat.user.avatar} alt={chat.user.name} />
                            ) : (
                                <div className="chat-list__avatar-placeholder">
                                    {chat.user.name[0]}
                                </div>
                            )}
                        </div>
                        <div className="chat-list__info">
                            <div className="chat-list__name">{chat.user.name}</div>
                            {chat.messages.length > 0 && (
                                <div className="chat-list__last-message">
                                    {chat.messages[chat.messages.length - 1].text}
                                </div>
                            )}
                        </div>
                        {chat.lastMessageTime && (
                            <div className="chat-list__time">
                                {new Date(chat.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}; 