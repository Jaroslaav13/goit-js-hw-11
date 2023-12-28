import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  searchForm: document.querySelector('.search-form'),
  inputSearch: document.querySelector('.input-name'),
  btnSearch: document.querySelector('.search-btn'),
  gallery: document.querySelector('.gallery'),
};


refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = refs.inputSearch.value;

  fetchImages(name);
})


const options = {
  key: '41496485-2e747cbe724a23cc88d300532',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function fetchImages(name) {

  options.q = name;
  
  const params = new URLSearchParams(options);

   fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
     .then(data => {
      
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: '"Sorry, there are no images matching your search query. Please try again!"',
          position: 'topRight',
          backgroundColor: '#EF4040',
        });
        return;
      }
      renderGallery(data.hits);
      console.log(data);

      refs.inputSearch.value = '';
      
    })
    .catch(error => 
      console.log(error))
      
}

function renderGallery(images) {
  const listEl = images
  .map(image => {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
          />
      </a>
    </li>`
  })
    .join('');
refs.gallery.innerHTML = ''
refs.gallery.insertAdjacentHTML('afterbegin', listEl);
  
  const newGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionsDataAlt: 'image.tags'
   
});
  
}

