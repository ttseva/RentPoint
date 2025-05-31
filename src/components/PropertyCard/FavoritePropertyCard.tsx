import React from 'react';
import { BasePropertyCard } from './BasePropertyCard';
import { removeFromFavorites } from '../../utils/favorites';

interface PropertyAddress {
    city: string;
    address: string;
}

interface FavoritePropertyCardProps {
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
    onDetailsClick?: () => void;
    onRemove?: () => void;
}

export const FavoritePropertyCard: React.FC<FavoritePropertyCardProps> = (props) => {
    const {
        id,
        onDetailsClick,
        onRemove,
        ...baseProps
    } = props;

    const handleRemove = () => {
        removeFromFavorites(id);
        onRemove?.();
    };

    return (
        <BasePropertyCard {...baseProps} id={id}>
            <div className="property-card__actions">
                <button
                    type="button"
                    className="property-card__action-btn property-card__action-btn--details"
                    onClick={onDetailsClick}
                >
                    <span>Просмотреть</span>
                </button>
                <button
                    type="button"
                    className="property-card__action-btn property-card__action-btn--delete"
                    onClick={handleRemove}
                >
                    <span>Удалить</span>
                </button>
            </div>
        </BasePropertyCard>
    );
}; 