import React from 'react';
import { BasePropertyCard } from "./BasePropertyCard";

interface PropertyAddress {
    city: string;
    address: string;
}

interface ProfilePropertyCardProps {
    id: number;
    rooms: 0 | 1 | 2 | 3 | 4;
    payment: number;
    floor: number;
    totalFloors: number;
    square: number;
    description: string;
    yearOfBuilding: number;
    address: [PropertyAddress['city'], PropertyAddress['address']];
    photos: string[];
    author: "user" | "server";
    onEditClick?: () => void;
    onDeleteClick?: () => void;
    onHideClick?: () => void;
}

export const ProfilePropertyCard: React.FC<ProfilePropertyCardProps> = (props) => {
    const {
        onEditClick,
        onDeleteClick,
        onHideClick,
        ...baseProps
    } = props;

    return (
        <BasePropertyCard {...baseProps}>
            <button 
                type="button" 
                className="property-card__action-btn property-card__action-btn--edit"
                onClick={onEditClick}
            >
                <span>Редактировать</span>
            </button>
            <button 
                type="button" 
                className="property-card__action-btn property-card__action-btn--hide"
                onClick={onHideClick}
            >
                <span>Скрыть</span>
            </button>
            <button 
                type="button" 
                className="property-card__action-btn property-card__action-btn--delete"
                onClick={onDeleteClick}
            >
                <span>Удалить</span>
            </button>
        </BasePropertyCard>
    );
}; 