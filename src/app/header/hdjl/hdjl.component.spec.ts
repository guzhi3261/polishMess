import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdjlComponent } from './hdjl.component';

describe('HdjlComponent', () => {
  let component: HdjlComponent;
  let fixture: ComponentFixture<HdjlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdjlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdjlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
