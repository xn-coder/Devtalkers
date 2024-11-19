import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivityComponent } from './profile-activity.component';

describe('ProfileActivityComponent', () => {
  let component: ProfileActivityComponent;
  let fixture: ComponentFixture<ProfileActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
