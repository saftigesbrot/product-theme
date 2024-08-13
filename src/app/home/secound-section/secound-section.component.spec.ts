import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundSectionComponent } from './secound-section.component';

describe('SecoundSectionComponent', () => {
  let component: SecoundSectionComponent;
  let fixture: ComponentFixture<SecoundSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecoundSectionComponent]
    });
    fixture = TestBed.createComponent(SecoundSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
