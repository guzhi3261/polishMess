import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GjzcComponent } from './gjzc.component';

describe('GjzcComponent', () => {
  let component: GjzcComponent;
  let fixture: ComponentFixture<GjzcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GjzcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GjzcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
