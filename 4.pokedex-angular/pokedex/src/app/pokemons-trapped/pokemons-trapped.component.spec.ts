import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTrappedComponent } from './pokemons-trapped.component';

describe('PokemonsTrappedComponent', () => {
  let component: PokemonsTrappedComponent;
  let fixture: ComponentFixture<PokemonsTrappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsTrappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsTrappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
