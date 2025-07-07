const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Phone Number: ${phone.value}<br>Message: ${message.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "01dipeshdas@gmail.com",
        Password : "EA2E0F092ED9C920DA74D6EBF099AD170E40",
        To : '01dipeshdas@gmail.com',
        From : "01dipeshdas@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
        if(message == "OK"){
            Swal.fire({
            title: "Success!",
            text: "Message sent",
            icon: "success"
            });
        }
    }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");
    for (const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value == ""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            else{
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        });
    }
}

function checkEmail(){
    const errtxtemail = document.querySelector(".error-text.email");

    const demo_email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(demo_email)){
        email.classList.add("errror");
        email.parentElement.classList.add("errror");
        if(email.value != ""){
            errtxtemail.innerText = "Enter a valid email address!";
        }
        else{
            errtxtemail.innerText = "Email Address can't be blank!";
        }
    }
    else{
        email.classList.remove("errror");
        email.parentElement.classList.remove("errror");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});

//for mobile navbar

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link')

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
