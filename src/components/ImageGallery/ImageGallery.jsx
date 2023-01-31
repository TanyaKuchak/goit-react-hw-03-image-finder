import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGallery({ gallery, onOpen }) {
  return (
    <ImageGalleryList>
      {gallery.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={() =>
              onOpen({
                src: largeImageURL,
                alt: webformatURL,
              })
            }
          />
        );
      })}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
