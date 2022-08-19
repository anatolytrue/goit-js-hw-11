const axios = require('axios').default;

const fetchGallery = async (value, step) => {
    // const KEY = '29317703-ef6f9bdce3d80f6e1cfb4e8df';
    const result = await axios.get(
        `https://pixabay.com/api/?key=29317703-ef6f9bdce3d80f6e1cfb4e8df&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${step}&per_page=40`)
    console.log(result);
    return result;
};

export default fetchGallery;