import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopApplications } from './desktop-applications';

describe('DesktopApplications', () => {
  let component: DesktopApplications;
  let fixture: ComponentFixture<DesktopApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopApplications],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopApplications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
