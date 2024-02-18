import { useState } from "react";
import { Photo } from "./components/types/Photo";
import PhotoList from "./components/galleryList/PhotoList";
import './style.css'
import AddPhoto from "./components/addPhoto/AddPhoto";

function App() {
  const defaultPhotos: Photo[] = [
    { id: 1, title: 'Заголовок фото 1', description: 'Описание фото 1', imageUrl: 'https://example.com/photo1.jpg' },
    { id: 2, title: 'Заголовок фото 2', description: 'Описание фото 2', imageUrl: 'https://example.com/photo2.jpg' },
    { id: 3, title: 'Заголовок фото 3', description: 'Описание фото 3', imageUrl: 'https://example.com/photo3.jpg' },
    { id: 4, title: 'Заголовок фото 4', description: 'Описание фото 4', imageUrl: 'https://example.com/photo4.jpg' },
    { id: 5, title: 'Заголовок фото 5', description: 'Описание фото 5', imageUrl: 'https://example.com/photo5.jpg' },
  ];

  const [photos, setPhotos] = useState<Photo[]>(defaultPhotos);

  const removePhoto = (value: number): void => setPhotos(photos.filter(({ id }) => id !== (value)));


  const addPhoto = (photo: Photo): void => {
    
    setPhotos([...photos, photo]); // Обновляем стейт, а не изменяем массив напрямую
  }
  const handlers = { removePhoto };
return (
  <div>
   
    <PhotoList photos={photos} {...handlers} />
    <AddPhoto addPhoto={addPhoto} />
  </div>
);
}
export default App;
