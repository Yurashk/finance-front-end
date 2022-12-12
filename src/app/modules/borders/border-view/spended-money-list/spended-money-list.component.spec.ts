import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendedMoneyListComponent } from './spended-money-list.component';

describe('SpendedMoneyListComponent', () => {
  let component: SpendedMoneyListComponent;
  let fixture: ComponentFixture<SpendedMoneyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendedMoneyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendedMoneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
