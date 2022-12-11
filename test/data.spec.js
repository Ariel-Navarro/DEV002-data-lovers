
import { aToZ, charactersAlive, charactersDead, zToA, spellsZToA, speciesHuman, spellsCharm, alReves, potionsDesc, speciesHalfGiant} from '../src/data.js';

// Creamos un data corta para probar los test

const charactersData = [
  {
    "name": "Harry Potter",
    "ancestry": "human",
    "gender": "male",
    "alive": "true",
    "species": "human"

  },
  {
    "name": "Hermione Granger",
    "ancestry": "human",
    "gender": "female",
    "alive": "true",
    "species": "human"

  },
  {
    "name": "Cedric Diggory",
    "ancestry": "",
    "gender": "male",
    "alive": "false",
    "species": "human"
  },
  {
    "name": "Rubeus Hagrid",
    "ancestry": "half-blood",
    "gender": "male",
    "alive": "true",
    "species": "half-giant"
  }

]
//Test orden alfabetico A-Z

describe('aToz ordena los personajes de la A a Z', () => {
  it('Deberia devolver una funcion', () => {
    expect(aToZ).toBeTruthy();
  });
  it('Deberia devolver los personajes en asc',() =>{
    let characAsc = aToZ(charactersData);
    expect(characAsc[0].name).toEqual('Cedric Diggory');
    expect(characAsc[1].name).toEqual('Harry Potter');
    expect(characAsc[2].name).toEqual('Hermione Granger');
    expect(characAsc[3].name).toEqual('Rubeus Hagrid');

  });
});
// Test alfabetico Z-A
describe('zToa ordena los personajes de la Z a la A', () => {
  it('Deberia devolver una funcion', () => {
    expect(zToA).toBeTruthy();
  });
  it('Deberia devolver los personajes en dec [Cedric Diggory],[Harry Potter],[Hermione Granger]',() =>{
    let characDesc = zToA(charactersData);
    expect(characDesc[0].name).toEqual('Rubeus Hagrid');
    expect(characDesc[1].name).toEqual('Hermione Granger');
    expect(characDesc[2].name).toEqual('Harry Potter');
    expect(characDesc[3].name).toEqual('Cedric Diggory');
  });
});
// Test de Personajes muertos
describe('charactersDead muestra los personajes en false', () => {
  it('Deberia devolver una funcion', () => {
    expect(charactersDead).toBeTruthy();
  });
  it('Deberia devolver los personajes en false',() =>{
    let characDesc = zToA(charactersData);
    expect(characDesc[0].alive).toEqual('true');
    expect(characDesc[1].alive).toEqual('true');
    expect(characDesc[2].alive).toEqual('false');
    expect(characDesc[3].alive).toEqual('true');
  });
});
//Test de personajs vivos
describe('charactersAlive muestra los personajes en true', () => {
  it('Deberia devolver una funcion', () => {
    expect(charactersAlive).toBeTruthy();
  });
  it('Deberia devolver los personajes en true', () => {
    let characAliv = charactersAlive(charactersData);
    expect(characAliv[0].alive).toEqual('true');
    expect(characAliv[1].alive).toEqual('true');
    expect(characAliv[2].alive).toEqual('false');
    expect(characAliv[3].alive).toEqual('true');
  });
});
//Test de personajes por especie humana
describe('speciesHuman muestra los personajes con especie human', () => {
  it('Deberia devolver una funcion', () => {
    expect(speciesHuman).toBeTruthy();
  });
  it('Deberia mostrar los personajes con especie human', () => {
    let characHuman = speciesHuman(charactersData);
    expect(characHuman[0].species).toEqual('human');
    expect(characHuman[1].species).toEqual('human');
    expect(characHuman[2].species).toEqual('human');
  });
});
//Test de personajes por especie Half Giant
describe('speciesHalfGiant muestra los personajes con especie half Giant', () => {
  it('Deberia devolver una funcion', () => {
    expect(speciesHalfGiant).toBeTruthy();
  });
  it('Deberia mostrar los personajes con especie Half Giant', () => {
    let characHalf = speciesHalfGiant(charactersData);
    expect(characHalf[4].species).toEqual('half-giant');

  });
});
//Data de los hechizo
const spellsData = [
  {
    "name": "Aberto",
    "other_name":"null",
    "description": "null",
    "etymology": "null",
    "spell_type": "Charm"
  },
  {
    "name": "Accio",
    "other_name":"Summoning Charm",
    "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
    "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
    "spell_type": "Charm"
  },
  {
    "name": "Albus Dumbledores forceful spell",
    "other_name":"null",
    "description": "This spell was, supposedly, quite powerful as when it was cast, the opponent was forced to conjure a silver shield to deflect it.",
    "etymology": "null",
    "spell_type": "Spell"
  }
]
// Test de hechizos Z-A
describe('spellsZToA ordena los hechizos de la Z a la A', () => {
  it('Deberia devolver una funcion', () => {
    expect(spellsZToA).toBeTruthy();
  })
  it('Deberia mostrar los hechizos en desc [Albus Dumbledores forceful spell],[Accio],[Aberto]', () => {
    let spellsDesc = spellsZToA(spellsData)
    expect(spellsDesc[0].name).toEqual('Albus Dumbledores forceful spell');
    expect(spellsDesc[1].name).toEqual('Accio');
    expect(spellsDesc[2].name).toEqual('Aberto')
  });
});
//Test de hechizos tipo Charm
describe('spellsCharm muestra los hechizos tipo Charm', () => {
  it('Deberia devolver una funcion', () => {
    expect(spellsCharm).toBeTruthy();
  })
  it('Deberia mostrar los hechizos tipo charm [Aberto],[Accio]', () => {
    let spellCharm = spellsCharm(spellsData)
    expect(spellCharm[0].spell_type).toEqual('Charm');
    expect(spellCharm[1].spell_type).toEqual('Charm');
  });
});
//Data de los libros
const booksData = [
  {
    "title":"Harry Potter and the Sorcerers Stone",
    "releaseDay": "June 26, 1997",
    "author": "J. K. Rowling",
    "description":"On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner."

  },
  {
    "title":"Harry Potter and the chamber of secrets",
    "releaseDay": "July 2, 1998",
    "author": "J. K. Rowling",
    "description":  "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle."
  },
  {
    "title": "Harry Potter and the Prisoner of Azkaban",
    "releaseDay": "July 8, 1999",
    "author": "J. K. Rowling",
    "description":"Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter."
  }
]
//Test de libros del reciente al antiguo
describe('alReves muestra los libros del mas viejo al mas reciente', () => {
  it('Deberia devolver una funcion', () => {
    expect(alReves).toBeTruthy();
  })
  it('Deberia mostrar los libros del mas reciente al mas antiguo', () => {
    let bookOldest = alReves(booksData)
    expect(bookOldest[0].releaseDay).toEqual('July 8, 1999');
    expect(bookOldest[1].releaseDay).toEqual('July 2, 1998');
    expect(bookOldest[2].releaseDay).toEqual('June 26, 1997');
  });
});
// Data Pociones
const potionsData = [
  {
    "name": "Ageing Potion",
    "description":"A potion that, depending on the amount taken, ages the drinker to various ages."
  },
  {
    "name": "Alihotsy Draught",
    "description": "The world's strongest Love Potion; does not create real love, just powerful obsession."

  }
]
//Test de pociones de la Z-A
describe('potionsDesc ordena las pociones de la Z a la A', () => {
  it('Deberia devolver una funcion', () => {
    expect(potionsDesc).toBeTruthy();
  })
  it('Deberia mostrar los las pociones en desc [Alihotsy Draught],[Ageing Potion]', () => {
    let potionsZA = potionsDesc(potionsData)
    expect(potionsZA[0].name).toEqual('Alihotsy Draught');
    expect(potionsZA[1].name).toEqual('Ageing Potion');
  });
});
