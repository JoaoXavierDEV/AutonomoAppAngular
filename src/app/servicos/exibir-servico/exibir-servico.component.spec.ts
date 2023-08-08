import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirServicoComponent } from './exibir-servico.component';

describe('ExibirServicoComponent', () => {
  let component: ExibirServicoComponent;
  let fixture: ComponentFixture<ExibirServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirServicoComponent]
    });
    fixture = TestBed.createComponent(ExibirServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
