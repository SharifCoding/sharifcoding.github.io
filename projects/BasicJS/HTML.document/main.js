console.log(document.title);
document.title = 'Basic HTML/DOM Design';
console.log(document.title);

/*
body {
  font-family: Arial, Helvetica, sans-serif; }
*/
const newBody = document.querySelector('body');
newBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
newBody.style.backgroundColor = '#FFBB22';

/*
header {
  font-size: 36px;
  color: white;
  background-color: #333;
  padding: 0px 16px; }
*/
const newHeader = document.querySelector('header');
newHeader.style.fontSize = '36px';
newHeader.style.color = 'white';
newHeader.style.backgroundColor = '#333';
newHeader.style.padding = '0px 16px';

/*
ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: #333; }
*/
const newUl = document.querySelector('nav ul');
console.log(newUl);
newUl.style.listStyleType = 'none';
newUl.style.margin = '0px';
newUl.style.padding = '0px';
newUl.style.overflow = 'hidden';
newUl.style.backgroundColor = '#333';

/*
li {
  float: left; }
  li a {
    display: block;
    color: white;
    text-align: left;
    padding: 14px 16px;
    text-decoration: none; }
    li a:hover {
      background-color: #111; }
*/
const links = document.querySelectorAll('a');
console.log(document);
for (let i = 0; i < links.length; i++) {
  links[i].style.float = 'left';
  links[i].style.float = 'left';
  links[i].style.display = 'block';
  links[i].style.color = 'white';
  links[i].style.textAlign = 'left';
  links[i].style.padding = '14px 16px';
  links[i].style.textDecoration = 'none';
}
function mouseOver(doc) {
  doc.style.backgroundColor = '#111';
}
function mouseOut(doc) {
  doc.style.backgroundColor = '#333';
  newActive.style.backgroundColor = '#4CAF50';
}

/*
.active {
    background-color: #4CAF50; }
*/
const newActive = document.querySelector('.active');
newActive.style.backgroundColor = '#4CAF50';

/*
figure > img {
  max-width: 100%;
  max-height: 100%; }
*/
const newFigureImg = document.querySelector('figure img');
newFigureImg.style.maxWidth = '100%';
newFigureImg.style.maxHeight = '100%';

/*
footer {
  font-size: 36px;
  color: white;
  background-color: #333;
  padding: 0px 16px; }
*/
const newFooter = document.querySelector('footer');
newFooter.style.fontSize = '36px';
newFooter.style.color = 'white';
newFooter.style.backgroundColor = '#333';
newFooter.style.padding = '0px 16px';
