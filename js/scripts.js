console.log('Hello from js/scripts.js!');

const customNameA = document.getElementById('customnameA');
const customNameB = document.getElementById('customnameB');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 103 fahrenheit outside in the blistering heat, so :insertx: went for a walk on the yellow brick road. When they got to :inserty:, Cathy stared in horror and disbelief for a few moments, then :insertz:. Bob saw the whole thing flash before his eyes, but was not surprised or bewildered — :insertx: weighs 300 pounds, and it was a hot and blistering day.';
let insertX = ['Willy the Green, happy Goblin','Big Daddy the Smelly Skunk','Father Christmas the Great'];
let insertY = ['the soup kitchen','Disneyland','the White House','Lulu Lemon studio','Best Buy','McDonalds'];
let insertZ = ['spontaneously combusted','melted into a puddle of pudding and marshmallows on the sidewalk','turned into a smelly slug and crawled away crying'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customNameA.value !== '') {
    const name = customNameA.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customNameB.value !== '') {
    const name = customNameB.value;
    newStory = newStory.replace('Cathy',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  if(document.getElementById("ru").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
