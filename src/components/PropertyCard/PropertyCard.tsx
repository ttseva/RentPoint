import React, { useState, useEffect } from 'react';
import { BasePropertyCard } from './BasePropertyCard';
import likeIcon from '../../assets/images/like-icon.svg';
import likeIconActive from '../../assets/images/like-icon__active.svg';
import messageIcon from '../../assets/images/mail-icon.svg';
import { addToFavorites, removeFromFavorites, isInFavorites } from '../../utils/favorites';

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
    isInChat?: boolean;
    onLikeClick?: () => void;
    onMessageClick?: () => void;
    onDetailsClick?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const {
        id,
        onLikeClick,
        onMessageClick,
        onDetailsClick,
        isInChat = false,
        ...baseProps
    } = props;

    useEffect(() => {
        setIsLiked(isInFavorites(id));
    }, [id]);

    const handleFavoriteClick = () => {
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);
        if (newIsLiked) {
            addToFavorites(id);
        } else {
            removeFromFavorites(id);
        }
        onLikeClick?.();
    };

    return (
        <BasePropertyCard {...baseProps} id={id}>
            {isInChat ? (
                <button
                    type="button"
                    className="property-card__action-btn property-card__action-btn--details"
                    onClick={onDetailsClick}
                >
                    <span>Детали</span>
                </button>
            ) : (
                <>
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
                </>
            )}
        </BasePropertyCard>
    );
};
