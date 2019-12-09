import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFirebaseComponent } from './auth-firebase.component';

describe('AuthFirebaseComponent', () => {
  let component: AuthFirebaseComponent;
  let fixture: ComponentFixture<AuthFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
