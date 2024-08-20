import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick, lastElRef }) {
  return (
    <ul className={css.container}>
      {items.map(
        (
          { id, largeImageURL, likes, webformatURL, user, downloads, tags },
          i
        ) => {
          const isLastEl = i === items.length - 1;
          const uniqueKey = `${id}-${i}`;
          return (
            <li
              key={uniqueKey}
              className={css.wrap}
              ref={isLastEl ? lastElRef : null}
            >
              <ImageCard
                src={webformatURL}
                alt={tags}
                onClick={() =>
                  onImageClick({ largeImageURL, likes, user, downloads, tags })
                }
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
