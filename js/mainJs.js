// Fetch content from the HomeContent.html file
fetch('homeContent.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('homeContentContainer').innerHTML = data;
    })
    .catch(error => console.error('Error fetching content:', error));


//Get navigate to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}