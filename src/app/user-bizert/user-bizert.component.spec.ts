import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBizertComponent } from './user-bizert.component';

describe('UserBizertComponent', () => {
  let component: UserBizertComponent;
  let fixture: ComponentFixture<UserBizertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBizertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBizertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
