import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Photo } from '../types/Photo';
import s from './style.module.css'


type FormData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  addPhoto: (photo: Photo) => void; // Уточненный тип для функции addPhoto
};

export default function AddPhoto({ addPhoto }: Props) {
  const [photo, setPhoto] = useState<FormData>({ id: 0, title: "", description: "", imageUrl: "" });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPhoto({
      ...photo,
      [name]: value,
    });
  };

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    const newPhoto: Photo = { ...photo };
    addPhoto(newPhoto);
  };

  return (
    <form onSubmit={formHandler} className={s.form}>
      <input value={photo.title} type="text" name="title" onChange={changeHandler} />
      <input value={photo.description} type="text" name="description" onChange={changeHandler} />
      <input value={photo.id} type="number" name="id" onChange={changeHandler} />
      <button type="submit">Add Photo</button>
    </form>
  );
}
