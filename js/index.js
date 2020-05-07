
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let nav = document.querySelectorAll('nav');
console.log(nav.children);
let navChildCount = nav[0].childElementCount;





let booksLink = documnet.createElement('a');
booksLink.innerHTML = "Books";
booksLink.href = 'Books.html';

let moviesLink = document.createElement('a');
moviesLink.innerHTML = 'Movies';
moviesLink.href = 'Movies.html';

for (let i = 1; i <= navChildCount; i++) {
  nav[0].children[i-1].innerHTML = siteContent['nav']['nav-item-'+i];
  nav[0].children[i-1].href = siteContent['nav']['nav-item-'+i] + 'html';
}





nav[0].appendChild(booksLink);
nav[0].prepend(moviesLink);

let colorNav = document.querySelector('nav');

for(let j = 1; j <= colorNav.childElementCount; j++) {
  nav[0].chlidren[j-1].style.color = 'grey';
}


let cta = document.querySelector('.cta h1');
cta.textContent = siteContent['cta']['h1'];

let ctaLogo = document.querySelector('.cta img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

let ctaButton = document.querySelector('.cta img');
ctaButton.textContent = siteContent['cta']['button'];


let mainContentHeaders = document.querySelectorAll('.main-content h4');
let mainContentParagraphs = document.querySelectorAll('.main-content p');

let mainContentKeys = Object.keys(siteContent['main-content']);
let mainContentVals = Object.values(siteContent['main - content']);


let h = 0;
let p = 0;

for (let i = 0; i < mainContentKeys.length; i ++) {
  if (mainContentKeys[i].indexOf('h4') > - 1) {
    mainContentHeaders[h++].textContent = mainContentVals[i];
  }

  else if (mainContentKeys[i].indexOf('content') > -1) {
  mainContentParagraphs[p++].textContent = mainContentVals[i];
}
}

const mainContentImage = document.getElementById('middle-img');
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);



const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent['contact']['address'];

const address = ['Street' ,  'Road' , 'Avenue'];
let footer = siteContent['contact']['address'].toString();

let firstHalf = footer.substring ( 0, footer.indexOf(address[0]) + address[0] .length);
let seondHalf = footer. substring (footer.indexOf(address[0] + address[0].length, footer.length));

contactAddress. innerHTML = firstHalf + '</br>' + secondHalf;

const contactNumber = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent['content']['phone'];

const contactEmail = document.querySelector('.contact p: last-child');
contactEmail.textContent = siteContent['contact']['email'];


const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

