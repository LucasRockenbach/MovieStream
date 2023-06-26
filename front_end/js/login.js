const loginBtn = document.getElementById('btn');
const url = 'http://localhost:8000/api/cadastros/login';



function verificaLogin(url, body){
    let req = new XMLHttpRequest();
    req.open('POST',url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    const json = JSON.stringify(body);
    req.send(json);
    req.onload = () => {
        console.log(req.responseText);

        
          const response = JSON.parse(req.responseText);
          const[primeiroObjeto] = response;
          const {userID} = primeiroObjeto;
          localStorage.setItem('userID', userID);
           window.location.href = `http://localhost:5500/front_end/home.html?id=${userID}`;
          

    }
}




loginBtn.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('pass').value;

    console.log(senha);
    console.log(email);

   let body = {
        email: `${email}`,
        password: `${senha}`
    }

    verificaLogin(url, body);

    


})

