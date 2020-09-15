import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionRuleComponent } from './auction-rule.component';

describe('AuctionRuleComponent', () => {
  let component: AuctionRuleComponent;
  let fixture: ComponentFixture<AuctionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
