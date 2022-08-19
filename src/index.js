import './css/styles.css';
import { searchForm, loadMoreButton } from './refs';
import clickonBtnSubmit from './clickSubmitButton'


searchForm.addEventListener('submit', clickonBtnSubmit);
loadMoreButton.addEventListener('click', onClickAddPage);





