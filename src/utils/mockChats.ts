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
            photos: ['https://picsum.photos/seed/apartment1/600/400'],
        },
        messages: [
            {
                id: '1',
                text: 'Здравствуйте! Интересует ваша квартира на Митинской улице.',
                senderId: 'currentUser',
                timestamp: Date.now() - 86400000, // 24 часа назад
                isOwn: true
            },
            {
                id: '2',
                text: 'Добрый день! Да, квартира свободна. Когда бы вы хотели посмотреть?',
                senderId: 'user1',
                timestamp: Date.now() - 82800000, // 23 часа назад
                isOwn: false
            },
            {
                id: '3',
                text: 'Можно завтра во второй половине дня?',
                senderId: 'currentUser',
                timestamp: Date.now() - 79200000, // 22 часа назад
                isOwn: true
            },
            {
                id: '4',
                text: 'Да, давайте в 15:00. Я вышлю адрес для просмотра.',
                senderId: 'user1',
                timestamp: Date.now() - 75600000, // 21 час назад
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
                text: 'Приветствуем! Отправьте тестовое сообщение, и мы постараемся ответить в течение нескольких минут.',
                senderId: 'support',
                timestamp: Date.now() - 7200000, // 2 часа назад
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