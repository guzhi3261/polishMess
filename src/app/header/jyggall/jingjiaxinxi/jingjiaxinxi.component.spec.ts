import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingjiaxinxiComponent } from './jingjiaxinxi.component';

describe('JingjiaxinxiComponent', () => {
  let component: JingjiaxinxiComponent;
  let fixture: ComponentFixture<JingjiaxinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingjiaxinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingjiaxinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
