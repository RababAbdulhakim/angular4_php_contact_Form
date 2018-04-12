import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyigAdminComponent } from './replyig-admin.component';

describe('ReplyigAdminComponent', () => {
  let component: ReplyigAdminComponent;
  let fixture: ComponentFixture<ReplyigAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyigAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyigAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
