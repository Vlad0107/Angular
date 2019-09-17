import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaivaComponent } from './paiva.component';

describe('PaivaComponent', () => {
  let component: PaivaComponent;
  let fixture: ComponentFixture<PaivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
