import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JjjyComponent } from './jjjy.component';

describe('JjjyComponent', () => {
  let component: JjjyComponent;
  let fixture: ComponentFixture<JjjyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JjjyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JjjyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
