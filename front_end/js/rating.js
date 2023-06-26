const userID = localStorage.getItem("userID");
const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get('id');
const url = `http://localhost:8000/rating/${userID}`

console.log(movieID);



function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
        
    }
    return request.responseText
}

function cadastrar(){
    let url = "http://localhost:8000/rating"
    let review = document.getElementById('review').value 
	let rating = document.getElementById('rating').value 
    body = {
        "userID": userID,
        "movieID": movieID,
        "rating": rating, 
		"review": review
        
    }



    fazPost(url, body)
}


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function fazLinha(rating){
    let linha = document.createElement('tr')
    let colID = document.createElement('td')
    let colReview = document.createElement('td')
    let colRating = document.createElement('td')
    let colDelete = document.createElement('td')
    let colEdit = document.createElement('td')
    colID.innerHTML = rating.id
    colReview.innerHTML = rating.review
    colRating.innerHTML = rating.rating
    colDelete.innerHTML = `<a class="delete"><i id="${colID.textContent}" class="fa-solid fa-trash"></i> </a>`
    colEdit.innerHTML = `<a class="update"  href="updaterating.html?id=${rating.id}"><i id="${colID.textContent}"class="fa-solid fa-pen-to-square"> </i></a>`
    linha.appendChild(colID)
    linha.appendChild(colReview)
    linha.appendChild(colRating)
    linha.appendChild(colDelete)
    linha.appendChild(colEdit)

    return linha


}


function main(){
    let dados = fazGet(`http://localhost:8000/rating/${userID}`) 
    let tab = document.getElementById('table')

    let usuario = JSON.parse(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}

main()
deletereview()

function deletereview(){ 
        let deleteElements = document.querySelectorAll('.delete');
        console.log(deleteElements);
        deleteElements.forEach((element) => {
            element.addEventListener('click', (event) => {
                const deleteIcon = event.target;

                console.log(deleteIcon)

                const id = deleteIcon.id;
      
                //  const deleteElement = deleteIcon.closest('tr');
                const table = document.getElementById('table');

                axios.delete(`http://localhost:8000/rating/${id}`)
                .then(response => {
                    console.log(response.data);
                    location.reload()
                })
                .catch(error => {
                    console.log(error);

                })
                
            })

        })
         
}


