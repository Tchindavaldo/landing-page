import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatNExtComponentComponent } from './stat-next-component.component';

describe('StatNExtComponentComponent', () => {
  let component: StatNExtComponentComponent;
  let fixture: ComponentFixture<StatNExtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatNExtComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatNExtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
