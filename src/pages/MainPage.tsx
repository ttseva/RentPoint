import React, { useState } from "react";
import "./MainPage.css";
import "../styles/components.css";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchFilters from "../components/SearchFilters/SearchFilters";
import { PropertyCard } from "../components/PropertyCard/PropertyCard";
import propertiesData from "../data/properties.json";

type City = "Москва" | "Санкт-Петербург";
type PropertyRoom = 0 | 1 | 2 | 3 | 4;

interface Filters {
  priceFrom: number | null;
  priceTo: number | null;
  rooms: PropertyRoom[];
  city: City;
}

interface Property {
  id: number;
  rooms: PropertyRoom;
  payment: number;
  floor: number;
  totalFloors: number;
  square: number;
  description: string;
  yearOfBuilding: number;
  address: [City, string];
  photos: string[];
  author: "user" | "server";
}

const cities: City[] = ["Москва", "Санкт-Петербург"];
const citiesInCase: Record<City, string> = {
  "Москва": "Москве",
  "Санкт-Петербург": "Санкт-Петербурге"
};

const MainPage = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    priceFrom: null,
    priceTo: null,
    rooms: [],
    city: cities[0]
  });

  const handleCityClick = () => {
    const nextIndex = (cityIndex + 1) % cities.length;
    setCityIndex(nextIndex);
    setFilters(prev => ({
      ...prev,
      city: cities[nextIndex]
    }));
  };

  const handleFiltersSubmit = (searchFilters: Omit<Filters, 'city'>) => {
    setFilters(prev => ({
      ...prev,
      ...searchFilters
    }));
  };

  const filterProperties = (property: Property) => {
    // Фильтрация по городу
    if (property.address[0] !== filters.city) {
      return false;
    }

    // Фильтрация по цене
    if (filters.priceFrom !== null && property.payment < filters.priceFrom) {
      return false;
    }
    if (filters.priceTo !== null && property.payment > filters.priceTo) {
      return false;
    }

    // Фильтрация по комнатам
    if (filters.rooms.length > 0 && !filters.rooms.includes(property.rooms)) {
      return false;
    }

    return true;
  };

  const properties = propertiesData.properties as Property[];

  return (
    <div className="main-page-layout">
      <Header />
      <div className="container main-page">
        <div className="main-page__content">
          <h1 className="main-title">
            Сдача квартир в{" "}
            <button
              className="main-title__city"
              type="button"
              onClick={handleCityClick}
            >
              {citiesInCase[cities[cityIndex]]}
            </button>
          </h1>
          <SearchFilters onSubmit={handleFiltersSubmit} />
          <main className="main-content">
            <div className="property-list">
              {properties
                .filter(filterProperties)
                .map(property => (
                  <PropertyCard key={property.id} {...property} />
                ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
