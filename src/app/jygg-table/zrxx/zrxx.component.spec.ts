import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZrxxComponent } from './zrxx.component';

describe('ZrxxComponent', () => {
  let component: ZrxxComponent;
  let fixture: ComponentFixture<ZrxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZrxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZrxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
