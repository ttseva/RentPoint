import React from 'react';
import { Chat } from '../components/Chat/Chat';
import './ChatsPage.css';

export const ChatsPage: React.FC = () => {
    return (
        <div className="chats-page">
            <Chat />
        </div>
    );
}; 