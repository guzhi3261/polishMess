import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZrxxDetailComponent } from './zrxx-detail.component';

describe('ZrxxDetailComponent', () => {
  let component: ZrxxDetailComponent;
  let fixture: ComponentFixture<ZrxxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZrxxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZrxxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
