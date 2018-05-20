const charLimit = 140;
const tweetBox = document.getElementById('tweet-box');
const submit = document.getElementById('submit');
const counter = document.getElementById('counter');
counter.textContent = charLimit;
submit.addEventListener('click', (() => {
  window.alert(`You tweeted: ${tweetBox.value}`);
}));
tweetBox.addEventListener('input', (event) => {
  const tweet = event.target.value;
  const charsRemaining = charLimit - tweet.length;
  counter.textContent = charsRemaining;
  if (charsRemaining < 0) {
    console.log(charsRemaining);
    submit.setAttribute('disabled', 'true');
  } else {
    submit.removeAttribute('disabled');
  }
});
const newBody = document.querySelector('body');
newBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
newBody.style.backgroundColor = '#FFBB22';
newBody.style.textAlign = 'center';
newBody.style.padding = '20px';
newBody.style.height = '50px';
