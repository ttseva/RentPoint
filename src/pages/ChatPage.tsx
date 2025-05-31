import React from 'react';
import { Chat } from '../components/Chat/Chat';
import './ChatPage.css';

export const ChatPage: React.FC = () => {
    return (
        <div className="chat-page">
            <Chat />
        </div>
    );
}; 