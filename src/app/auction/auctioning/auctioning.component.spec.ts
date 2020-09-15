import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctioningComponent } from './auctioning.component';

describe('AuctioningComponent', () => {
  let component: AuctioningComponent;
  let fixture: ComponentFixture<AuctioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
