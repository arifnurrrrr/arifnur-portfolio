//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger

const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//accordion
const accordionHeader = document.querySelectorAll('.accordion-header');

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', event => {
        accordionHeader.classList.toggle("accordion-active")
        const accordionBody = accordionHeader.nextElementSibling
        if(accordionHeader.classList.contains("accordion-active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
        }else {
            accordionBody.style.maxHeight = 0
        }
    })
})

//Maail
const btnKirim = document.querySelector('.btn-kirim');
const btnTerkirim = document.querySelector('.btn-terkirim');
const btnLoading = document.querySelector('.btn-loading');
function SendMail() {
    var params = {
        
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    btnKirim.classList.toggle('hidden');
    btnLoading.classList.toggle('hidden');
    
    emailjs.send("service_0enukty", "template_udh5xhs", params).then(function (res){
        btnLoading.classList.toggle('hidden');
        btnTerkirim.classList.toggle('hidden');

        console.log("Success!" + res.status);
    })
}