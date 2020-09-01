import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JjjyDetailComponent } from './jjjy-detail.component';

describe('JjjyDetailComponent', () => {
  let component: JjjyDetailComponent;
  let fixture: ComponentFixture<JjjyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JjjyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JjjyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
