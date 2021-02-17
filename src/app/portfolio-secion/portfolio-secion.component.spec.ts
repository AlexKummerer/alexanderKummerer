import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSecionComponent } from './portfolio-secion.component';

describe('PortfolioSecionComponent', () => {
  let component: PortfolioSecionComponent;
  let fixture: ComponentFixture<PortfolioSecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSecionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
