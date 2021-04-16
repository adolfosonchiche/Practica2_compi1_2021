import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisAnalizadorComponent } from './lis-analizador.component';

describe('LisAnalizadorComponent', () => {
  let component: LisAnalizadorComponent;
  let fixture: ComponentFixture<LisAnalizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisAnalizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisAnalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
