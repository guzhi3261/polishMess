import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhcxComponent } from './zhcx.component';

describe('ZhcxComponent', () => {
  let component: ZhcxComponent;
  let fixture: ComponentFixture<ZhcxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhcxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhcxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
