import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattlemarketsComponent } from './cattlemarkets.component';

describe('CattlemarketsComponent', () => {
  let component: CattlemarketsComponent;
  let fixture: ComponentFixture<CattlemarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattlemarketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattlemarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
