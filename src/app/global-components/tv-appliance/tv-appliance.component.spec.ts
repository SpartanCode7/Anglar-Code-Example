import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvApplianceComponent } from './tv-appliance.component';

describe('TvApplianceComponent', () => {
  let component: TvApplianceComponent;
  let fixture: ComponentFixture<TvApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
