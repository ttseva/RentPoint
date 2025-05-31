import React, { useState, useEffect, useRef } from 'react';
import { Chat as ChatType, Message } from '../../types/chat';
import { ChatList } from './ChatList';
import { ChatMessage } from './ChatMessage';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import { MOCK_CHATS } from '../../utils/mockChats';
import './Chat.css';

const STORAGE_KEY = 'rentpoint_chats';

export const Chat: React.FC = () => {
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<string>();
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Пытаемся получить чаты из localStorage
        const savedChats = localStorage.getItem(STORAGE_KEY);
        if (savedChats) {
            const parsedChats = JSON.parse(savedChats);
            setChats(parsedChats);
            if (parsedChats.length > 0) {
                setActiveChat(parsedChats[0].id);
            }
        } else {
            // Если в localStorage ничего нет, используем моковые данные
            setChats(MOCK_CHATS);
            if (MOCK_CHATS.length > 0) {
                setActiveChat(MOCK_CHATS[0].id);
            }
            // Сохраняем моковые данные в localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_CHATS));
        }
    }, []);

    // Сохраняем изменения в localStorage при обновлении чатов
    useEffect(() => {
        if (chats.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
        }
    }, [chats]);

    const currentChat = chats.find(chat => chat.id === activeChat);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!newMessage.trim() || !activeChat) return;

        const message: Message = {
            id: Date.now().toString(),
            text: newMessage,
            senderId: 'currentUser',
            timestamp: Date.now(),
            isOwn: true
        };

        setChats(prevChats => 
            prevChats.map(chat => 
                chat.id === activeChat
                    ? {
                        ...chat,
                        messages: [...chat.messages, message],
                        lastMessageTime: message.timestamp
                    }
                    : chat
            )
        );

        setNewMessage('');
    };

    return (
        <div className="chat">
            <div className="chat__sidebar">
                <ChatList
                    chats={chats}
                    activeChat={activeChat}
                    onChatSelect={setActiveChat}
                />
            </div>
            <div className="chat__main">
                {currentChat ? (
                    <>
                        <div className="chat__header">
                            <h2 className="chat__title">{currentChat.user.name}</h2>
                        </div>
                        {currentChat.property && (
                            <div className="chat__property">
                                <PropertyCard
                                    {...currentChat.property}
                                    author="server"
                                    isInChat={true}
                                />
                            </div>
                        )}
                        <div className="chat__messages">
                            {currentChat.messages.map(message => (
                                <ChatMessage
                                    key={message.id}
                                    message={message}
                                    user={currentChat.user}
                                />
                            ))}
                        </div>
                        <form className="chat__input" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Напишите текст..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button type="submit" className="chat__send-btn">
                                Отправить
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="chat__empty">
                        <p>Выберите чат для начала общения</p>
                    </div>
                )}
            </div>
        </div>
    );
}; 