const apiKey = "e4976d3322e90f8629ba68e6df85676f";
const btn = document.getElementById('pesquisa');

const urlParams = new URLSearchParams(window.location.search);


let userID = "" + urlParams.get('id');

if(userID == "null"){
    userID = "" + localStorage.getItem('userID');
}


   btn.addEventListener('click', () => {

    //pegar termo digitado pelo usuario
    const searchTerm = document.getElementById('filmeInput').value;
   
    //chamar api
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(response =>{
        //pegar resultados da api
        const movie = response.data.results;
        const image_path = "https://image.tmdb.org/t/p/w500/"

        //mostrar no frontend
        const divResult = document.getElementById('result');
        divResult.innerText = "";
        movie.forEach(movie => {  

            const itemElement = document.createElement('li');
            itemElement.innerHTML = `<img src="${image_path}${movie.poster_path}">
                                     <span class="title">${movie.title}</span>
                                     <span id="${movie.id}" class="add">Add</span>`       
            divResult.appendChild(itemElement);
           
        }) 
        
        salvaFilme();
        console.log(movie);         
    })
    .catch(error => {
        console.log(error);
    })
   })
   

   
let url = "http://localhost:8000/api/filmes";

 function salvaFilme(){
    const spans = document.querySelectorAll('.add');
    spans.forEach(function(span){
        span.addEventListener("click", ()=>{
           let movieID = span.id;
           var li = span.closest('li');
           var img = li.querySelector('img');
           let posterPATH = img.src;
           let title = li.querySelector('.title').textContent;

            axios.post(url, {
                userID: `${userID}`,
                imdbID: `${movieID}`,
                posterPath: `${posterPATH}`,
                title: `${title}`
            })
            .then(response =>{
                console.log(response.data);
            })
            .catch(function (error){
                console.log("erro no post " + error);
            })

        })
    })
  
}