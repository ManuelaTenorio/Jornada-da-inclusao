import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import styles from '../../assets/styles/jogoNumeros.module.css'

export function NumberBox({ id, value }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });
  const dynamicStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const staticStyles = {
    willChange: 'transform',
  };

  return (
    <div
      style={{ ...staticStyles, ...dynamicStyles }}
      ref={setNodeRef} {...attributes} {...listeners}
      className={styles.numberBox}>
      {value}
    </div>
  );
}
