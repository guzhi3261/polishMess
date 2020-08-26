import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpxwComponent } from './tpxw.component';

describe('TpxwComponent', () => {
  let component: TpxwComponent;
  let fixture: ComponentFixture<TpxwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpxwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpxwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
