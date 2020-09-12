import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XqxxComponent } from './xqxx.component';

describe('XqxxComponent', () => {
  let component: XqxxComponent;
  let fixture: ComponentFixture<XqxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XqxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XqxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
