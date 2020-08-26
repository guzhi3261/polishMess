import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcfgComponent } from './zcfg.component';

describe('ZcfgComponent', () => {
  let component: ZcfgComponent;
  let fixture: ComponentFixture<ZcfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
