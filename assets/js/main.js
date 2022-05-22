import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

function generatorMovie() {
  let idRandom = Math.floor(Math.random() * 1000) * 2


  const urlApiMovie = `${BASE_URL}${idRandom}?${API_KEY}&${language}`;

  fetch(urlApiMovie)
    .then(res => res.json())
    .then(data => { 
      if(data.success == false || data.overview == ''){
        generatorMovie()
      }else{
        movieTitle.textContent = data.title
        movieImage.src = `${IMG_URL}/${data.poster_path}`
        movieImage.alt = `Capa do filme ${data.title}`
        movieDescription.textContent = data.overview
      }
    })
    .catch(error => console.error(error))
}

btnGeneratorMovie.addEventListener("click", generatorMovie);