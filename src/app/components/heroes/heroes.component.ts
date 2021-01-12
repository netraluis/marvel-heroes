import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../../models/heroe.interface";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroesService.getAllHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
