import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemodesComponent } from './gamemodes.component';

describe('GamemodesComponent', () => {
  let component: GamemodesComponent;
  let fixture: ComponentFixture<GamemodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamemodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamemodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
