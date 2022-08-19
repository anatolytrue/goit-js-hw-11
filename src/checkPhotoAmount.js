import { loadMoreButton } from "./refs";

function checkAmount(response) {
    const photoPerPage = 40;
    const galleryTotalHits = response.data.totalHits;
    if (galleryTotalHits > photoPerPage) {
        loadMoreButton.classList.remove('is-hidden')
    } else {
        loadMoreButton.classList.add('is-hidden')
    }
}

export default checkAmount;