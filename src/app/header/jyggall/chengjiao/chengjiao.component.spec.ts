import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengjiaoComponent } from './chengjiao.component';

describe('ChengjiaoComponent', () => {
  let component: ChengjiaoComponent;
  let fixture: ComponentFixture<ChengjiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChengjiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChengjiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
