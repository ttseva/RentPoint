import React from 'react';
import { BaseInteractiveElement } from '../common/BaseInteractiveElement';
import './PropertyCard.css';

export function BasePropertyCard({
    id,
    rooms,
    payment,
    floor,
    totalFloors,
    square,
    description,
    address,
    photos,
    className = '',
    children
}) {
    const formatPrice = (price) => {
        return `₽${price.toLocaleString('ru-RU')}/мес.`;
    };

    const getRoomsLabel = (rooms) => {
        if (rooms === 0) return "Студия";
        return `${rooms}-комнатная квартира`;
    };

    const [city, streetAddress] = address;

    return (
        <BaseInteractiveElement id={String(id)} className={`property-card ${className}`}>
            <div className="property-card__content">
                <div className="property-card__info">
                    <div className="property-card__details">
                        {`${floor}/${totalFloors} этаж · ${square}м²`}
                    </div>
                    <h3 className="property-card__title">
                        {getRoomsLabel(rooms)}
                    </h3>
                    <div className="property-card__address">
                        {`${city}, ${streetAddress}`}
                    </div>
                    <div className="property-card__price">
                        {formatPrice(payment)}
                    </div>
                </div>
                <div className="property-card__image">
                    <img src={photos[0]} alt={description} />
                </div>
            </div>
            {children && (
                <div className="property-card__actions">
                    {children}
                </div>
            )}
        </BaseInteractiveElement>
    );
} 