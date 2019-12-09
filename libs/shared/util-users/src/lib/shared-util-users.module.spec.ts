import { async, TestBed } from '@angular/core/testing';
import { SharedUtilUsersModule } from './shared-util-users.module';

describe('SharedUtilUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilUsersModule).toBeDefined();
  });
});
