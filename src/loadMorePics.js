import Notiflix from 'notiflix';
import { galleryList, loadMoreButton } from './refs';
import createGalleryMarkup from './renderingMarkup';

function onClickLoadMore(response, step) {
  const dataTotalPhoto = response.data.totalHits;
  const dataTotalImg = response.data.hits;
  let totalPages = dataTotalPhoto / 40;

  if (step > totalPages) {
    loadMoreButton.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
  createGalleryMarkup(dataTotalImg);
  endlessScroll(galleryList);
}

export default onClickLoadMore;