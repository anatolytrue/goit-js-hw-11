import { searchForm, inputForm, submitButton, galleryList } from './refs';
import Notiflix from 'notiflix';
import fetchGallery from './fetchPics';
import onClickLoadMore from './loadMorePics';

let value = null;
let step = 1;




function onClickLonBtnSubmit(event) {
  event.preventDefault();
  value = event.target.searchQuery.value.toLowerCase().trim();

  if (!value) {
    galleryEl.innerHTML = '';
    loadMoreBtnEl.classList.add('is-hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  } else {
    galleryEl.innerHTML = '';
    fetchData(value, stepPage)
      .then(checkResponse)
      .catch(error => console.log(error));
  }
}

async function onClickAddPage() {
  stepPage += 1;
  fetchData(value, stepPage)
    .then(data => onClickLoadMore(data, stepPage))
    .catch(error => console.log(error));
}

export { onClickLonBtnSubmit, onClickAddPage };
