import React from "react";

import Header from "../components/Header/Header";
// import SearchFilters from "../components/SearchFilters";
// import PropertyCard from "../components/PropertyCard";
// import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <header>
        {/* Логотип + навигация + профиль */}
      </header>

      {/* Фильтры поиска */}
      {/* <SearchFilters /> */}
      <section className="search-filters">
        {/* Поля "от", "до", кнопки выбора типа, "Сбросить", "Искать" */}
      </section>

      {/* Список карточек недвижимости */}
      <main>
        <div className="property-list">
          {/* <PropertyCard /> x N */}
        </div>
      </main>

      {/* Футер */}
      {/* <Footer /> */}
      <footer>
        {/* Ссылки, копирайт */}
      </footer>
    </div>
  );
};

export default MainPage;
