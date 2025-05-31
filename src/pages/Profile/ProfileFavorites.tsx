import React, { useState, useEffect } from 'react';
import { FavoritePropertyCard } from '../../components/PropertyCard/FavoritePropertyCard';
import { getFavorites } from '../../utils/favorites';
import propertiesData from '../../data/properties.json';
import './ProfileFavorites.css';

export const ProfileFavorites = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<any[]>([]);

  const loadFavorites = () => {
    const favoriteIds = getFavorites();
    const favorites = propertiesData.properties
      .filter(property => 
        favoriteIds.includes(property.id) && 
        property.author === 'server'
      );
    setFavoriteProperties(favorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const handleRemove = () => {
    loadFavorites();
  };

  return (
    <div className="profile-favorites">
      <div className="profile-favorites__header">
        <h2 className="profile-favorites__title">Сохраненные объявления</h2>
      </div>
      <div className="profile-favorites__list">
        {favoriteProperties.map(property => (
          <FavoritePropertyCard
            key={property.id}
            {...property}
            onRemove={handleRemove}
          />
        ))}
        {favoriteProperties.length === 0 && (
          <div className="profile-favorites__empty">
            <p>У вас пока нет сохраненных объявлений</p>
          </div>
        )}
      </div>
    </div>
  );
}; 