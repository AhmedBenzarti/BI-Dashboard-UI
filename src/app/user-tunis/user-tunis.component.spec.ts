import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTunisComponent } from './user-tunis.component';

describe('UserTunisComponent', () => {
  let component: UserTunisComponent;
  let fixture: ComponentFixture<UserTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTunisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
