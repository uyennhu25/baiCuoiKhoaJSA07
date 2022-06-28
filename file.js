function carousel(x, y) {
    if (z.matches) {
        $(document).ready(function () {
            $('.carousel').slick({
                slidesToShow: 1,
                dots: false,
                arrow: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                swipe: false,
                focusOnSelect: true,
            });
        });
    } else if (y.matches) {
        $(document).ready(function () {
            $('.carousel').slick({
                slidesToShow: 2,
                dots: false,
                arrow: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                swipe: false,
                focusOnSelect: true,
            });
        });
    
    } else if (x.matches){
        $(document).ready(function () {
            $('.carousel').slick({
                slidesToShow: 3,
                dots: false,
                arrow: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                swipe: false,
                focusOnSelect: true,
            });
        });
        
    } else {
        $(document).ready(function () {
            $('.carousel').slick({
                slidesToShow: 3,
                dots: false,
                centerMode: true,
                arrow: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                swipe: false,
                focusOnSelect: true,
            });
        });
    }
  }
  
var x = window.matchMedia("(max-width: 1300px)")
var y = window.matchMedia("(max-width: 1120px)")
var z = window.matchMedia("(max-width: 800px)")
carousel(x, y, z)



$(document).ready(function () {
    $('.popular-destinations').slick({
        slidesToShow: 3,
        arrow: true,
        nextArrow: document.getElementById('slick-next'),
        prevArrow: document.getElementById('slick-prev'),
        swipe: false,
        variableWidth: true,
    });
});

let form = document.getElementById('form_card')
let nameInput = document.getElementById('name')
let passwordInput = document.getElementById('password')
let confirmPassword = document.getElementById('confirmpassword')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (confirmpassword != passwordInput) {
        alert("...")
    }

    console.log(nameInput.value, passwordInput.value)
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('password', passwordInput.value)

    nameInput.value = ''
    passwordInput.value = ''
    confirmPassword.value = ''


})

let login = document.getElementById('login')

login.addEventListener('click', logIn)


function logIn() {
    form.innerHTML = `
        <h3>Log in</h3>
        <input type="text" name="name" id="name" placeholder=" Enter your name" />
        <input type="password" name="password" id="password" placeholder=" Enter password" style="margin-bottom: 2px;" />
        <span class="caption" style="float: left;" >Forgot your password?</span>
        <span class="caption" style="float: right; cursor: pointer;" id="register_button" onclick="signUp()">Register</span>
        <button type="submit" id="submit">Submit</button>`
    form.style.display = "block"
    form.style.height = "310px"
}

let signup = document.getElementById('signup')

signup.addEventListener('click', signUp)

function signUp() {
    form.innerHTML = `
        <h3>Sign up</h3>
        <input type="text" name="name" id="name" placeholder=" Enter your name" />
        <input type="password" name="password" id="password" placeholder=" Enter password" />
        <input type="password" name="confirmpassword" id="confirmpassword" placeholder=" Re-enter password" style="margin-bottom: 2px;" />
        <span class="caption" style="float: right; cursor: pointer;" id="login_button" onclick="logIn()">Log in</span>
        <button type="submit" id="submit">Submit</button>`
    form.style.display = "block"
    form.style.height = "370px"
}


document.addEventListener('click', function (e) {
    if ((!form.contains(e.target)) && (!login.contains(e.target)) && (!signup.contains(e.target)) && (form.style.display == "block")) {
        form.style.display = "none";
        console.log('success')
    }
});

function readMore(order) {
    var dots = document.querySelector(`.saiGon-desc[order="${order}"] .dots`);
    var moreText = document.querySelector(`.saiGon-desc[order="${order}"] .more`);
    var readbth = document.querySelector(`.saiGon-desc[order="${order}"] .readbth`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      readbth.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      readbth.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

