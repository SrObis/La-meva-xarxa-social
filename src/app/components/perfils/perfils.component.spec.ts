import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilsComponent } from './perfils.component';

describe('PerfilsComponent', () => {
  let component: PerfilsComponent;
  let fixture: ComponentFixture<PerfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
