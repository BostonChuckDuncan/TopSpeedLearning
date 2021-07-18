import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpeedHelpsComponent } from './top-speed-helps.component';

describe('TopSpeedHelpsComponent', () => {
  let component: TopSpeedHelpsComponent;
  let fixture: ComponentFixture<TopSpeedHelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSpeedHelpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSpeedHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
