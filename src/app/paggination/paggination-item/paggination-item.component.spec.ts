import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagginationItemComponent } from './paggination-item.component';

describe('PagginationItemComponent', () => {
  let component: PagginationItemComponent;
  let fixture: ComponentFixture<PagginationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagginationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagginationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
