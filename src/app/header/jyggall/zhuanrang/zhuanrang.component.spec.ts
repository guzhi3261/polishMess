import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuanrangComponent } from './zhuanrang.component';

describe('ZhuanrangComponent', () => {
  let component: ZhuanrangComponent;
  let fixture: ComponentFixture<ZhuanrangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhuanrangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuanrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
