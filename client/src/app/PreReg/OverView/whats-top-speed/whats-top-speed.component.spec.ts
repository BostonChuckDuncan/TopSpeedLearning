import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsTopSpeedComponent } from './whats-top-speed.component';

describe('WhatsTopSpeedComponent', () => {
  let component: WhatsTopSpeedComponent;
  let fixture: ComponentFixture<WhatsTopSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsTopSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsTopSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
