import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.pokemons=POKEMONS;
  }
  title = 'pokemon';
  public pokemons:Pokemon[];
  public value:string='';
  public age=20;

  selectPokemon(pokemon:Pokemon){
    alert("click sur "+pokemon.name);
  }

  onClick(){
    alert("vous avez cliquer ");
  }
  onKey(event:any){
    this.value="bonjour "+event.target.value;
  }

  onKeyValue(valeur:string){
    this.value="Bonjour "+valeur;
  }
}
