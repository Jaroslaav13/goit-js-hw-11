// import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const refs = {
  searchForm: document.querySelector('.search-form'),
  inputSearch: document.querySelector('.input-name'),
  btnSearch: document.querySelector('.search-btn')
}

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
    .then(images => {
      
      
      console.log(images);

      refs.inputSearch.value = ''; 
    })
    .catch(error => console.log(error));
}
