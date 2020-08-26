import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JyggAllComponent } from './jyggall.component';

describe('JyggComponent', () => {
  let component: JyggAllComponent;
  let fixture: ComponentFixture<JyggAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JyggAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JyggAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
