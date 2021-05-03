import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2751Component } from './test-component2751.component';

describe('TestComponent2751Component', () => {
  let component: TestComponent2751Component;
  let fixture: ComponentFixture<TestComponent2751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2751Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
