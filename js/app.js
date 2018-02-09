'use strict';

var mainElLeft = document.getElementById('mainLeft');
var mainElCenter = document.getElementById('mainCenter');
var mainElRight = document.getElementById('mainRight');
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
new ProfileObj('Kevin', 10, '../partFinder/img/classIcons/cleric.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Peter', 10, '../partFinder/img/classIcons/sorcerer.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Jon-Eric', 10, '../partFinder/img/classIcons/ranger.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Victoria', 10, '../partFinder/img/classIcons/bard.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Boomer', 10, '../partFinder/img/classIcons/barbarian.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Kat', 10, '../partFinder/img/classIcons/rogue.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Anna', 10, '../partFinder/img/classIcons/bloodhunter.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('David', 10, '../partFinder/img/classIcons/paladin.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('JP', 10, '../partFinder/img/classIcons/wizard.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('James', 10, '../partFinder/img/classIcons/monk.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Lizzy', 10, '../partFinder/img/classIcons/warlock.png','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);
new ProfileObj('Tewes', 10, '../partFinder/img/classIcons/druid.jpg','http://via.placeholder.com/200x100/404040', ['5e', '4e', 'Pathfinder', 'Star Wars AoR'], 5, testBio);

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

// Profile form gen
function profileFormGen () {
  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('id', 'profileFieldset');
  var legend = document.createElement('legend');
  legend.setAttribute('id', 'profileLegend');
  legend.textContent = 'User profile';
  fieldset.appendChild(legend);
  var inputElDisplayName = document.createElement('imput');
  inputElDisplayName.setAttribute('name', 'displayName');
  inputElDisplayName.setAttribute('id', 'displayName');
  inputElDisplayName.setAttribute('placeholder', 'Display Name');
  fieldset.appendChild(inputElDisplayName);
  var inputElYearsPlayed = document.createElement('input');
  inputElYearsPlayed.setAttribute('name', 'yearsPlayed');
  inputElYearsPlayed.setAttribute('id', 'yearsPlayed');
  inputElYearsPlayed.setAttribute('placeholder', 'Years playing RPGs');
  fieldset.appendChild(inputElYearsPlayed);
  var selectElClass = document.createElement('select');
  selectElClass.setAttribute('name', 'classSelect');
  selectElClass.setAttribute('id', 'classSelect');
  var optionElBarbarian = document.createElement('option');
  optionElBarbarian.setAttribute('value', '../partFinder/img/classIcons/barbarian.png');
  optionElBarbarian.textContent = 'Barbarian';
  selectElClass.appendChild(optionElBarbarian);
  var optionElBard = document.createElement('option');
  optionElBard.setAttribute('value', '../partFinder/img/classIcons/bard.png');
  optionElBard.textContent = 'Bard';
  selectElClass.appendChild(optionElBard);
  var optionELbloodhunter = document.createElement('option');
  optionELbloodhunter.setAttribute('value', '../partFinder/img/classIcons/bloodhunter.png');
  optionELbloodhunter.textContent = 'Bloodhunter';
  selectElClass.appendChild(optionELbloodhunter);
  var optionELCleric = document.createElement('option');
  optionELCleric.setAttribute('value', '../partFinder/img/classIcons/cleric.png');
  optionELCleric.textContent = 'Cleric';
  selectElClass.appendChild(optionELCleric);
  var optionELDruid = document.createElement('option');
  optionELDruid.setAttribute('value', '../partFinder/img/classIcons/druid.jpg');
  optionELDruid.textContent = 'Druid';
  selectElClass.appendChild(optionELDruid);
  var optionELFighter = document.createElement('option');
  optionELFighter.setAttribute('value', '../partFinder/img/classIcons/fighter.png');
  optionELFighter.textContent = 'Fighter';
  selectElClass.appendChild(optionELFighter);
  var optionELMonk = document.createElement('option');
  optionELMonk.setAttribute('value', '../partFinder/img/classIcons/monk.png');
  optionELMonk.textContent = 'Monk';
  selectElClass.appendChild(optionELMonk);
  var optionELPaladin = document.createElement('option');
  optionELPaladin.setAttribute('value', '../partFinder/img/classIcons/paladin.png');
  optionELPaladin.textContent = 'Paladin';
  selectElClass.appendChild(optionELPaladin);
  var optionELRanger = document.createElement('option');
  optionELRanger.setAttribute('value', '../partFinder/img/classIcons/ranger.png');
  optionELRanger.textContent = 'Ranger';
  selectElClass.appendChild(optionELRanger);
  var optionELRogue = document.createElement('option');
  optionELRogue.setAttribute('value', '../partFinder/img/classIcons/rogue.png');
  optionELRogue.textContent = 'Rogue';
  selectElClass.appendChild(optionELRogue);
  var optionELSorcerer = document.createElement('option');
  optionELSorcerer.setAttribute('value', '../partFinder/img/classIcons/sorcerer.png');
  optionELSorcerer.textContent = 'Sorcerer';
  selectElClass.appendChild(optionELSorcerer);
  var optionELWarlock = document.createElement('option');
  optionELWarlock.setAttribute('value', '../partFinder/img/classIcons/warlock.png');
  optionELWarlock.textContent = 'Warlock';
  selectElClass.appendChild(optionELWarlock);
  var optionELWizard = document.createElement('option');
  optionELWizard.setAttribute('value', '../partFinder/img/classIcons/wizard.png');
  optionELWizard.textContent = 'Wizard';
  selectElClass.appendChild(optionELWizard);
  fieldset.appendChild(selectElClass);
  mainElCenter.appendChild(fieldset);
}

//Render the cards to screen
function updateDisplay () {
  for(var i in ProfileObj.allCards) {
    mainElLeft.appendChild(cardCreator(ProfileObj.allCards[i]));
  }
  profileFormGen();
}

// Call on page load
updateDisplay();