import { Chat } from '../types/chat';

export const MOCK_CHATS: Chat[] = [
    {
        id: '1',
        user: {
            id: 'user1',
            name: 'Иван Иванов',
        },
        property: {
            id: 1,
            rooms: 3,
            payment: 85000,
            floor: 9,
            totalFloors: 17,
            square: 75,
            description: 'Светлая просторная квартира с современным ремонтом',
            yearOfBuilding: 2019,
            address: ['Москва', 'Митинская улица, 27к1'],
            photos: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500'],
        },
        messages: [
            {
                id: '1',
                text: 'Здравствуйте! Интересует ваша квартира на Митинской улице.',
                senderId: 'currentUser',
                timestamp: Date.now() - 86400000, 
                isOwn: true
            },
            {
                id: '2',
                text: 'Добрый день! Да, квартира свободна. Когда бы Вы хотели подъехать на просмотр?',
                senderId: 'user1',
                timestamp: Date.now() - 82800000,
                isOwn: false
            },
            {
                id: '3',
                text: 'Возможно завтра во второй половине дня?',
                senderId: 'currentUser',
                timestamp: Date.now() - 79200000, 
                isOwn: true
            },
            {
                id: '4',
                text: 'Хорошо, давайте после 15',
                senderId: 'user1',
                timestamp: Date.now() - 75600000, 
                isOwn: false
            }
        ],
        lastMessageTime: Date.now() - 75600000
    },
    {
        id: '2',
        user: {
            id: 'support',
            name: 'Чат Поддержки',
        },
        messages: [
            {
                id: '1',
                text: 'Приветствуем! Отправьте сообщение, но, правда, мы его не получим!',
                senderId: 'support',
                timestamp: Date.now() - 7200000,
                isOwn: false
            }
        ],
        lastMessageTime: Date.now() - 7200000
    }
];

export const initializeMockChats = () => {
    localStorage.setItem('rentpoint_chats', JSON.stringify(MOCK_CHATS));
};

export const clearMockChats = () => {
    localStorage.removeItem('rentpoint_chats');
}; 