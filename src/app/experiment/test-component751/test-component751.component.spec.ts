import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent751Component } from './test-component751.component';

describe('TestComponent751Component', () => {
  let component: TestComponent751Component;
  let fixture: ComponentFixture<TestComponent751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent751Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
