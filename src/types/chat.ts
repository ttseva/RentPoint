export interface Message {
    id: string;
    text: string;
    senderId: string;
    timestamp: number;
    isOwn: boolean;
}

export interface ChatUser {
    id: string;
    name: string;
    avatar?: string;
}

export interface Chat {
    id: string;
    user: ChatUser;
    property?: {
        id: number;
        rooms: 0 | 1 | 2 | 3 | 4;
        payment: number;
        floor: number;
        totalFloors: number;
        square: number;
        description: string;
        yearOfBuilding: number;
        address: [string, string];
        photos: string[];
    };
    messages: Message[];
    lastMessageTime: number;
} 