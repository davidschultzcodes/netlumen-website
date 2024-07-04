function scrollToElement(elementSelector, instance =0){
    //select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance){
        //scroll to specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const explorefeatures = document.getElementById("explorefeatures");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    //scroll to second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});

explorefeatures.addEventListener('click', () =>{
    scrollToElement('.header');
});

function sendEmail() {
    var email = 'mailto:contact@netlumen.net';
    window.location.href = email;
}