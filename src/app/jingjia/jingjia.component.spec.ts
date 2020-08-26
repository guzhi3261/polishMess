import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingjiaComponent } from './jingjia.component';

describe('JingjiaComponent', () => {
  let component: JingjiaComponent;
  let fixture: ComponentFixture<JingjiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingjiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingjiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
