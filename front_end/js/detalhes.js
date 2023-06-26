const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get('imdbID');
const apiKey = "e4976d3322e90f8629ba68e6df85676f";
const image_path = "https://image.tmdb.org/t/p/w500/"

console.log(imdbID);

axios.get(`https://api.themoviedb.org/3/movie/${imdbID}?api_key=${apiKey}`)
.then(response => {
    const movieDetails = response.data;

    const{title, overview, release_date, poster_path} = movieDetails;

    const container = document.getElementById('container');

    container.innerHTML = ` <h1>Pagina de Detalhes</h1>
                            <div class="movie">
                            <img src="${image_path}${poster_path}" alt="">
                            <div class="details">
                                <h1>${title}</h1>
                                <span>${overview}</span>
                                <span class="data">Data de lançamento: ${release_date} </span>
                                <a href="meusFilmes.html">voltar</a>
                                <span>
                                <form method="post"></form>

    <button id="open-modal">Review</button>
    <div id="fade" class="hide"></div>
    <div id="modal" class="hide">
      <div class="modal-header">
        <h2>review</h2>
        <button id="close-modal">Fechar</button>
      </div>
      <div class="modal-body">
        <textarea name="" id="review" cols="30" rows="10" placeholder="digite seu comentario"></textarea>
        
        <p>
          <input type="number" placeholder="de a sua nota " id="rating">
        </p><button class="btn btn-primary" onclick="cadastrar()"> salvar </button>
      </div> </span>
      <script>
        const openModalButton = document.querySelector("#open-modal");
        const closeModalButton = document.querySelector("#close-modal");
        const modal = document.querySelector("#modal");
        const fade = document.querySelector("#fade");

        const toggleModal = () => {
          modal.classList.toggle("hide");
          fade.classList.toggle("hide");
        };

        [openModalButton, closeModalButton, fade].forEach((el) => {
          el.addEventListener("click", () => toggleModal());
        });
      </script>
                                
                            </div>`
    
})
.catch(error => {
    console.log(error);
})
