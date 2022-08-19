import { loadMoreButton, galleryList } from './refs';
import Notiflix from 'notiflix';
import fetchGallery from './fetchPics';
import onClickLoadMore from './loadMorePics';

let value = null;
let step = 1;




function clickonBtnSubmit(event) {
  event.preventDefault();
  value = event.target.value.toLowerCase().trim();
  console.log(event.target)

  if (!value) {
    galleryList.innerHTML = '';
    loadMoreButton.classList.add('is-hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  } else {
    galleryList.innerHTML = '';
    fetchGallery(value, step)
      .then(checkResponse)
      .catch(error => console.log(error));
  }
}

function onClickAddPage() {
  step += 1;
  fetchGallery(value, step)
    .then(data => onClickLoadMore(data, step))
    .catch(error => console.log(error));
}

export { clickonBtnSubmit, onClickAddPage };
