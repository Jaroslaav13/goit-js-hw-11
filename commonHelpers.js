import{S as d,i as m}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const a={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-name"),btnSearch:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery")},n=document.createElement("div");n.classList.add("loader");a.searchForm.addEventListener("submit",s=>{s.preventDefault();const o=a.inputSearch.value;a.gallery.appendChild(n),n.style.display="block",f(o)});const c={key:"41496485-2e747cbe724a23cc88d300532",image_type:"photo",orientation:"horizontal",safesearch:!0};function u(s){m.error({title:"Error",message:s,position:"topRight",backgroundColor:"#EF4040"})}function f(s){c.q=s;const o=new URLSearchParams(c);return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}p(e.hits),console.log(e),a.inputSearch.value=""}).catch(e=>{console.log(e),u("Sorry, there are no images matching your search query. Please try again!")}).finally(()=>{n.remove()})}function p(s){const o=s.map(e=>`<li class="gallery-item">
    <div class="box-cards">
      <a class="gallery-link" href="${e.largeImageURL}">
            <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
           data-likes="${e.likes}"
            data-views="${e.views}"
            data-comments="${e.comments}"
            data-downloads="${e.downloads}"
          />
          <div class="image-info">
          <p class="text-item">Likes: ${e.likes}</p>
          <p class="text-item">Views: ${e.views}</p>
          <p class="text-item">Comments: ${e.comments}</p>
          <p class="text-item">Downloads: ${e.downloads}</p>
        
        </div>
      </a>
      </div>
           </li>`).join("");a.gallery.innerHTML="",a.gallery.insertAdjacentHTML("afterbegin",o),new d(".gallery a",{captionsData:"alt",captionDelay:250,captionsDataAlt:"image.tags"})}
//# sourceMappingURL=commonHelpers.js.map
