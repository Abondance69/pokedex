import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoriteCardComponent } from './pokemon-favorite-card.component';

describe('PokemonFavoriteCardComponent', () => {
  let component: PokemonFavoriteCardComponent;
  let fixture: ComponentFixture<PokemonFavoriteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFavoriteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFavoriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
