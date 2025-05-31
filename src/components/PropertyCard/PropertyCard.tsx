import React, { useState } from 'react';
import { BasePropertyCard } from './BasePropertyCard';
import likeIcon from '../../assets/images/like-icon.svg';
import likeIconActive from '../../assets/images/like-icon__active.svg';
import messageIcon from '../../assets/images/mail-icon.svg';

interface PropertyAddress {
    city: string;
    address: string;
}

interface PropertyCardProps {
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
    onLikeClick?: () => void;
    onMessageClick?: () => void;
    onDetailsClick?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const {
        onLikeClick,
        onMessageClick,
        onDetailsClick,
        ...baseProps
    } = props;

    const handleFavoriteClick = () => {
        setIsLiked(!isLiked);
        onLikeClick?.();
    };

    return (
        <BasePropertyCard {...baseProps}>
            <button 
                type="button" 
                className={`property-card__action-btn property-card__action-btn--favorite ${isLiked ? 'is-active' : ''}`}
                onClick={handleFavoriteClick}
            >
                <img 
                    src={isLiked ? likeIconActive : likeIcon} 
                    alt="Like" 
                    className="property-card__action-icon"
                />
            </button>
            <button
                type="button"
                className="property-card__action-btn property-card__action-btn--message"
                onClick={onMessageClick}
            >
                <img src={messageIcon} alt="Написать" />
                <span>Написать</span>
            </button>
            <button
                type="button"
                className="property-card__action-btn property-card__action-btn--details"
                onClick={onDetailsClick}
            >
                <span>Детали</span>
            </button>
        </BasePropertyCard>
    );
};
