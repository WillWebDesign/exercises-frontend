import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss']
})
export class PokemonDataComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit() {
  }

}
