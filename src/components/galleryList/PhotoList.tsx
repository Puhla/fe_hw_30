import React from 'react'
import { Photo } from '../types/Photo';
import PhotoItem from '../galleryItem/PhotoItem';
import s from './style.module.css'


type Props = {
  photos: Photo[];
  removePhoto: (id: number) => void; 
};

export default function PhotoList({ photos, removePhoto }: Props) {
  return (
    <div className={s.photos}>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} {...photo} removePhoto={removePhoto} />
      ))}
    </div>
  );
}