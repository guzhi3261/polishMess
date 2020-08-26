import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CjggComponent } from './cjgg.component';

describe('CjggComponent', () => {
  let component: CjggComponent;
  let fixture: ComponentFixture<CjggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CjggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CjggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
