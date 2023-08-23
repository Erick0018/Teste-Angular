import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralTemplateComponent } from './mural-template.component';

describe('MuralTemplateComponent', () => {
  let component: MuralTemplateComponent;
  let fixture: ComponentFixture<MuralTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
