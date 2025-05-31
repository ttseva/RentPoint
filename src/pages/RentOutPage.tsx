import React, { useState } from 'react';
import { FormInput } from '../components/FormInput/FormInput';
import { ImageUpload } from '../components/ImageUpload/ImageUpload';
import './RentOutPage.css';

type City = "Москва" | "Санкт-Петербург";
const ALLOWED_CITIES: City[] = ["Москва", "Санкт-Петербург"];

interface RentOutForm {
  type: string;
  description: string;
  address: string;
  area: string;
  floor: string;
  totalFloors: string;
  price: string;
  images: File[];
}

interface AddressValidation {
  isValid: boolean;
  city: City | null;
  restAddress: string | null;
  error?: string;
}

const apartmentTypes = [
  { value: 'studio', label: 'Студия' },
  { value: '1-room', label: '1-комнатная' },
  { value: '2-room', label: '2-комнатная' },
  { value: '3-room', label: '3-комнатная' },
  { value: '4-room', label: '4-комнатная' },
];

const validateAddress = (address: string): AddressValidation => {
  // Проверяем, начинается ли адрес с города и запятой
  const parts = address.split(',').map(part => part.trim());
  
  if (parts.length < 2) {
    return {
      isValid: false,
      city: null,
      restAddress: null,
      error: 'Адрес написан в неверном формате. Пример: Москва, пр-т Вернадского, 78'
    };
  }

  const city = parts[0] as City;
  const restAddress = parts.slice(1).join(',').trim();

  if (!ALLOWED_CITIES.includes(city)) {
    return {
      isValid: false,
      city: null,
      restAddress,
      error: 'Такой город добавить пока нельзя. Доступны только: Москва, Санкт-Петербург'
    };
  }

  if (!restAddress) {
    return {
      isValid: false,
      city,
      restAddress: null,
      error: 'Укажите адрес после города'
    };
  }

  return {
    isValid: true,
    city,
    restAddress
  };
};

export const RentOutPage: React.FC = () => {
  const [formData, setFormData] = useState<RentOutForm>({
    type: '',
    description: '',
    address: '',
    area: '',
    floor: '',
    totalFloors: '',
    price: '',
    images: [],
  });

  const [addressError, setAddressError] = useState<string>();

  const handleChange = (field: keyof RentOutForm) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Сбрасываем ошибку адреса при изменении
    if (field === 'address') {
      setAddressError(undefined);
    }
  };

  const validateAddressField = () => {
    const validation = validateAddress(formData.address);
    setAddressError(validation.error);
    return validation.isValid;
  };

  const handleImagesSelected = (files: File[]) => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isAddressValid = validateAddressField();
    if (!isAddressValid) {
      return;
    }

    // Преобразуем адрес в нужный формат перед отправкой
    const addressValidation = validateAddress(formData.address);
    const formattedData = {
      ...formData,
      address: addressValidation.isValid 
        ? [addressValidation.city, addressValidation.restAddress] 
        : formData.address,
    };

    // TODO: Implement API integration
    console.log('Form submitted:', formattedData);
  };

  return (
    <div className="rent-out">
      <div className="rent-out__content">
        <h1 className="rent-out__title">Создать новое объявление</h1>
        <form className="rent-out__form" onSubmit={handleSubmit}>
          <FormInput
            label="Тип квартиры"
            placeholder="Выберите..."
            type="select"
            options={apartmentTypes}
            value={formData.type}
            onChange={handleChange('type')}
          />
          
          <FormInput
            label="Описание"
            placeholder="Опишите процедуру заселения, оборудование и ремонт, или особые условия проживания"
            type="textarea"
            value={formData.description}
            onChange={handleChange('description')}
          />

          <FormInput
            label="Адрес"
            placeholder="Например: Москва, пр-т Вернадского, 78"
            value={formData.address}
            onChange={handleChange('address')}
            onBlur={validateAddressField}
            error={addressError}
          />

          <div className="rent-out__row">
            <FormInput
              label="Площадь (м.кв.)"
              type="number"
              placeholder="40"
              value={formData.area}
              onChange={handleChange('area')}
            />
            <div className="rent-out__floor-inputs">
              <FormInput
                label="Этаж"
                type="number"
                placeholder="5"
                value={formData.floor}
                onChange={handleChange('floor')}
              />
              <FormInput
                label="из"
                type="number"
                placeholder="10"
                value={formData.totalFloors}
                onChange={handleChange('totalFloors')}
              />
            </div>
          </div>

          <FormInput
            label="Цена (за месяц)"
            type="number"
            placeholder="60000"
            value={formData.price}
            onChange={handleChange('price')}
          />

          <ImageUpload onImagesSelected={handleImagesSelected} />

          <button type="submit" className="rent-out__submit">
            Опубликовать
          </button>
        </form>
      </div>
    </div>
  );
}; 