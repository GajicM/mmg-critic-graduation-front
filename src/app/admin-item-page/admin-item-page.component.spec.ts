import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemPageComponent } from './admin-item-page.component';

describe('AdminItemPageComponent', () => {
  let component: AdminItemPageComponent;
  let fixture: ComponentFixture<AdminItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminItemPageComponent]
    });
    fixture = TestBed.createComponent(AdminItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
