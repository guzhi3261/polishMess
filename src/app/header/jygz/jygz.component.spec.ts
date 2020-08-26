import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JygzComponent } from './jygz.component';

describe('JygzComponent', () => {
  let component: JygzComponent;
  let fixture: ComponentFixture<JygzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JygzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JygzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
