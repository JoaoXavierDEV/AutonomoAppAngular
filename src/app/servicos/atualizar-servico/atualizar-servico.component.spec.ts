import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarServicoComponent } from './atualizar-servico.component';

describe('AtualizarServicoComponent', () => {
  let component: AtualizarServicoComponent;
  let fixture: ComponentFixture<AtualizarServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarServicoComponent]
    });
    fixture = TestBed.createComponent(AtualizarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
