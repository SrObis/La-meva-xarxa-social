import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarisComponent } from './lista-usuaris.component';

describe('ListaUsuarisComponent', () => {
  let component: ListaUsuarisComponent;
  let fixture: ComponentFixture<ListaUsuarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
