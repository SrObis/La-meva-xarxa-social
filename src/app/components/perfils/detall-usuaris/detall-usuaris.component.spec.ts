import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallUsuarisComponent } from './detall-usuaris.component';

describe('DetallUsuarisComponent', () => {
  let component: DetallUsuarisComponent;
  let fixture: ComponentFixture<DetallUsuarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallUsuarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallUsuarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
