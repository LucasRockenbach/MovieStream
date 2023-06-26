const btn = document.getElementById('submit');


btn.addEventListener('click', () =>{
    console.log("oi")
    let url = "http://localhost:8000/api/cadastros"
    let name = document.getElementById('name').value 
	let email = document.getElementById('email').value 
	let pass = document.getElementById('pass').value 
	let phone = document.getElementById('phone').value 

    axios.post(url, {
        name: `${name}`,
        email: `${email}`,
        password: `${pass}`,
        phone: `${phone}`
    })
    .then(response  =>{
        console.log(response.data);
        window.location.href = 'http://http://localhost:5500/front_end/login.html'
    })
    .catch(function (error) {
        console.log("erro no post " + error);
    })

});
