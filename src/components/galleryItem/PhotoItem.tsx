import { Photo } from "../types/Photo"
import s from './style.module.css'

type Props = Photo & { removePhoto: (id: number) => void }; 
export default function PhotoItem({ id, title, description, imageUrl, removePhoto }: Props) {

  const handleDelete = () => {
    removePhoto(id);
  };

  return (
    <div className={s.item}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{imageUrl}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
