import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityEvtCompComponent } from './visibility-evt-comp.component';

describe('VisibilityEvtCompComponent', () => {
  let component: VisibilityEvtCompComponent;
  let fixture: ComponentFixture<VisibilityEvtCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibilityEvtCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisibilityEvtCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
