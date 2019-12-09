import { async, TestBed } from '@angular/core/testing';
import { LibsAuthDataAccessModule } from './libs-auth-data-access.module';

describe('LibsAuthDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsAuthDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsAuthDataAccessModule).toBeDefined();
  });
});
