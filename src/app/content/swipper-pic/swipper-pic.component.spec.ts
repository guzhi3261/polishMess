import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperPicComponent } from './swipper-pic.component';

describe('SwipperPicComponent', () => {
  let component: SwipperPicComponent;
  let fixture: ComponentFixture<SwipperPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
