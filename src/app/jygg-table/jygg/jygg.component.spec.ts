import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JyggComponent } from './jygg.component';

describe('JyggComponent', () => {
  let component: JyggComponent;
  let fixture: ComponentFixture<JyggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JyggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JyggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
