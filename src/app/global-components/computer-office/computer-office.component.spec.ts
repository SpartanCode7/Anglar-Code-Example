import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerOfficeComponent } from './computer-office.component';

describe('ComputerOfficeComponent', () => {
  let component: ComputerOfficeComponent;
  let fixture: ComponentFixture<ComputerOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
