import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XqxxDetailComponent } from './xqxx-detail.component';

describe('XqxxDetailComponent', () => {
  let component: XqxxDetailComponent;
  let fixture: ComponentFixture<XqxxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XqxxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XqxxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
