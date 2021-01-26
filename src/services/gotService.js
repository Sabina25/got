export default class GotService {
  constructor() {
    this._apiBase = "https://anapioficeandfire.com/api";
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }
  async getAllCharacters() {
    const res = await this.getResource(`/characters?page=5&pageSaze=10`);
    return res.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      title: house.title,
      overlong: house.overlong,
      anscestralWeapons: house.anscestralWeapons,
    };
  }

  _transforBooks(book) {
    return {
      name: book.name,
      numberOfPage: book.numberOfPage,
      publiser: book.publiser,
      released: book.released,
    };
  }
}
