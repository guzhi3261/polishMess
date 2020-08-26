import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfzcComponent } from './dfzc.component';

describe('DfzcComponent', () => {
  let component: DfzcComponent;
  let fixture: ComponentFixture<DfzcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfzcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfzcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
