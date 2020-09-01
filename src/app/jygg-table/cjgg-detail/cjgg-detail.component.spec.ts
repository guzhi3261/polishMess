import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CjggDetailComponent } from './cjgg-detail.component';

describe('CjggDetailComponent', () => {
  let component: CjggDetailComponent;
  let fixture: ComponentFixture<CjggDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CjggDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CjggDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
