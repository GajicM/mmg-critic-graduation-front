import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticCardComponent } from './critic-card.component';

describe('CriticCardComponent', () => {
  let component: CriticCardComponent;
  let fixture: ComponentFixture<CriticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
