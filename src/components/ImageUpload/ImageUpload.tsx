import React, { useCallback } from 'react';
import './ImageUpload.css';

interface ImageUploadProps {
  onImagesSelected: (files: File[]) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesSelected }) => {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter(file =>
        file.type.startsWith('image/')
      );
      onImagesSelected(files);
    },
    [onImagesSelected]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files ? Array.from(e.target.files) : [];
      onImagesSelected(files);
    },
    [onImagesSelected]
  );

  const preventDefault = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="image-upload"
      onDrop={handleDrop}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
    >
      <div className="image-upload__content">
        <p className="image-upload__title">Перетащите фото сюда</p>
        <p className="image-upload__separator">или</p>
        <label className="image-upload__button">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="image-upload__input"
          />
          Выберите его
        </label>
      </div>
    </div>
  );
}; 