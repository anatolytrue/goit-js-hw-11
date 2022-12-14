import { galleryList } from './refs';
import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const createGalleryMarkup = galleryEl => {
    // galleryEl.innerHTML = '';


    const render = galleryEl.map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) =>
            `<a class="gallery__link" href="${largeImageURL}">
        <div class="photo-card">
        <div class="thumb">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  </div>
  <div class="info">
    <p class="info-item">
      <b>Likes: <br>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: <br>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: <br>${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: <br>${downloads}</b>
    </p>
  </div>
</div></a>`
    ).join('');
  galleryList.insertAdjacentHTML('beforeend', render);
  

  const lightbox = new SimpleLightBox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 300,
  });
  lightbox.refresh();

    // return galleryList;
}


export default createGalleryMarkup;