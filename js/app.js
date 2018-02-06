'use strict';

var mainEL = document.getElementById('content');
var formElLogin = document.getElementById('navLoginForm');

var testBio = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum non laudantium voluptatem ullam quis recusandae saepe ratione temporibus dolore nobis, consequuntur, doloremque quisquam earum vero dignissimos cupiditate accusamus laboriosam error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus dignissimos, voluptatibus ab repudiandae optio eos! Cum illum voluptas modi ea? Illo ullam maxime, nobis laudantium debitis ab nisi quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nemo iusto placeat quod eligendi doloremque labore voluptatibus mollitia. Architecto consequuntur minima atque totam excepturi distinctio cumque molestiae? Impedit, culpa voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sit fuga iure quibusdam dignissimos pariatur iste quis consectetur voluptate repellat. At ratione fugit praesentium velit explicabo distinctio error ipsa in?';

ProfileObj.allCards = [];

// Card creator function
function ProfileObj (userName, userLevel, userClass, characterAvatar, gameType, narrativeWeight, userBio) {
  this.userName = userName,
  this.userLevel = userLevel,
  this.userClass = userClass,
  this.characterAvatar = characterAvatar,
  this.gameType = gameType,
  this.narrativeWeight = narrativeWeight,
  this.userBio = userBio,
  ProfileObj.allCards.push(this);
}

// hard coded / test cards
new ProfileObj('Kevin', 10, '../partFinder/img/classIcons/rogue.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);

// Card creator
function cardCreator (ProfileObj) {
  var divElFlipContainer = document.createElement('div');
  divElFlipContainer.setAttribute('id', ProfileObj.userName + 'div');
  divElFlipContainer.setAttribute('class', 'flipContainer');
  var divElFlipper = document.createElement('div'); // Div that holds the transition
  divElFlipper.setAttribute('class', 'flipper');
  var divElFront = document.createElement('div'); // Div for the front side of the card
  divElFront.setAttribute('class', 'front');
  var divElBack = document.createElement('div'); // Div for the back of the card
  divElBack.setAttribute('class', 'back');
  var imgElClassIcon = document.createElement('img'); // Class Icon element
  imgElClassIcon.setAttribute('class', 'cardIconImg');
  imgElClassIcon.alt = ProfileObj.userName;
  imgElClassIcon.src = ProfileObj.userClass;
  divElFront.appendChild(imgElClassIcon); // Appened class icon to front div
  var h2ElUserName = document.createElement('h2'); // Name El
  h2ElUserName.textContent = ProfileObj.userName;
  divElFront.appendChild(h2ElUserName); // appened to front of card
  var h2ElUserNameBack = document.createElement('h2'); // Name El
  h2ElUserNameBack.textContent = ProfileObj.userName;
  divElBack.appendChild(h2ElUserNameBack); // appened to back of card
  divElFlipper.appendChild(divElFront); // Appened the front div to the flipper div
  var imgElcharacterAvatars = document.createElement('img');
  imgElcharacterAvatars.setAttribute('class', 'characterAvatarImg'); // characterAvatar
  imgElcharacterAvatars.alt = ProfileObj.userName;
  imgElcharacterAvatars.src = ProfileObj.characterAvatar;
  // divElBack.appendChild(imgElcharacterAvatars); // Appened the characterAvatar to the back of the card
  var pELnarrativeWeight = document.createElement('p'); // narrativeWeight el
  pELnarrativeWeight.textContent = 'Prefered game style (Narrative vs tactical): ' + ProfileObj.narrativeWeight;
  divElBack.appendChild(pELnarrativeWeight); // Append the narrativeWeight number
  var ulEl = document.createElement('ul');
  for ( var i in ProfileObj.gameType) {
    var liEl = document.createElement('li');
    liEl.textContent = ProfileObj.gameType[i];
    ulEl.appendChild(liEl);
  }
  divElBack.appendChild(ulEl);
  // TODO bio add
  divElFlipper.appendChild(divElBack); // Appened the back div to the flipper
  divElFlipContainer.appendChild(divElFlipper); // appeend the flipper to the flip container
  return divElFlipContainer;
}

//Render the cards to screen
function updateDisplay () {
  for(var i in ProfileObj.allCards) {
    mainEL.appendChild(cardCreator(ProfileObj.allCards[i]));
  }
}

// Call on page load
updateDisplay();