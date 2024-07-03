import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor() {}

  private favorites : String[] = [];

  async getAllPokemonAsync() {
    try {
      const req = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18'
      );
      if (req.ok) {
        return await req.json();
      }
      return false;
    } catch (err) {
      // console.log(err)
      throw new Error('Error :' + err);
    }
  }

  async getPokemonByName(name: String | undefined) {
    try {
      const req = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      if (req.ok) {
        return await req.json();
      }
      return false;
    } catch (err) {
      // console.log(err)
      throw new Error('Error :' + err);
    }
  }

  addPokemonFavorite(favorite : string | undefined){
    if(favorite) localStorage.setItem(`${favorite}`, favorite);
  }

  removePokemonFavorite(favorite : string | undefined){
    localStorage.removeItem(`${favorite}`);
  }

  getPokemonFavorite(favorite : string | undefined){
    const local = localStorage.getItem(`${favorite}`);
    if(local == favorite){
      this.favorites.push(local);
      return local;
    } 
    return null;
  }

  getAllPokemonFavorite(){
    return this.favorites;
  }
}
