import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEVTComponent } from './modal-evt.component';

describe('ModalEVTComponent', () => {
  let component: ModalEVTComponent;
  let fixture: ComponentFixture<ModalEVTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEVTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
