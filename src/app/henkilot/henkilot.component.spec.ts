import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenkilotComponent } from './henkilot.component';

describe('HenkilotComponent', () => {
  let component: HenkilotComponent;
  let fixture: ComponentFixture<HenkilotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenkilotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenkilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
