let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// function using above array to extract correct sound from animal and country input 

const petSounds = (animal, country) => {
  let sound ='';
  for (let x = 0; x < animalNoises.length; ++x){
    let currAnimal = animalNoises[x];
// loop through array looking for animal
    if (animal in currAnimal){
      let currSounds = currAnimal[animal];
//check object for country
      if (country in currSounds){
         sound = currSounds[country]; 
      }
    }
  }
//capitalize first letter of animal name
  let animalFirst = animal.slice(0,1).toUpperCase(); 
  let animalLast = animal.slice(1); 
  let animalNameCaps = animalFirst + animalLast; 
return `${animalNameCaps}s in ${country} say ${sound}`;
}
