const axios = require('axios').default;

// async function fetchPics() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
const fetchGallery = async (value, step) => {
    const KEY = '29317703-ef6f9bdce3d80f6e1cfb4e8df';
    const result = await axios.get(
        `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${step}&per_page=40`)
    // .then(token => {
    console.log(result);
    return result;
    //   });
};

export default fetchGallery;