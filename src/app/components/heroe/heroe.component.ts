import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent implements OnInit {
  magazines: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    const identifier = this.activatedRoute.snapshot.paramMap.get("id");
    const type = this.activatedRoute.snapshot.paramMap.get("type");
    console.log(identifier, type);
    this.getAllMagazines(identifier, type);
  }
  getAllMagazines(id, type) {
    this.heroesService.getAllMagazineType(id, type).subscribe((magazines) => {
      this.magazines = magazines;
      console.log("llamada getAllMagazines", this.magazines);
    });
  }
}
