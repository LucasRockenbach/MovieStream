const urlParams = new URLSearchParams(window.location.search);
const reviewID = urlParams.get('id');
console.log(reviewID)

function getOne(){ 
  
    axios.get(`http://localhost:8000/review/${reviewID}`)
    .then(response =>{
        console.log(response.data);

        const [  {review, rating} ]= response.data;
        
        console.log(review, rating)
        const reviewElement = document.getElementById('review');
        const ratingElement = document.getElementById('rating');

        reviewElement.textContent = review;
        ratingElement.value  = rating;

    })
    .catch( erro => {
        console.log(error);
    })

}
    
getOne()

function update (){
    let newReview = document.getElementById('review').value;
    let newRating = document.getElementById('rating').value;
   let  body = {
        "rating": newRating, 
		"review": newReview
        
    }

    axios.put(`http://localhost:8000/rating/${reviewID}`, body)
    .then(response => {
        console.log(response.data);
    })

}