import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-name',
  templateUrl: './pokemon-name.component.html',
  styleUrls: ['./pokemon-name.component.scss'],
})
export class PokemonNameComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;

  constructor() {}

  ngOnInit() {}
}
