import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSuperHero.UI';
  heroes: SuperHero[]=[];
  heroToEdit?: SuperHero; //new 
  columnsToDisplay=[`name`,`firstName`,`lastName`,`place`,`button`]; //our data which will be show on the page? button its colour for button

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe( (result : SuperHero[]) => (this.heroes=result) );
  }

  // for heroToEdit?
  initNewHero(){
    this.heroToEdit = new SuperHero(); 
  }
    // for heroToEdit?
  editHero(hero: SuperHero){
    this.heroToEdit=hero;
  }

  updateHeroList(heroes:SuperHero[]){
    this.heroes = heroes;
  }
}
