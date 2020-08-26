import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XwdtComponent } from './xwdt.component';

describe('XwdtComponent', () => {
  let component: XwdtComponent;
  let fixture: ComponentFixture<XwdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XwdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XwdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
