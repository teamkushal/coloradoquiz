import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1730Component } from './test-component1730.component';

describe('TestComponent1730Component', () => {
  let component: TestComponent1730Component;
  let fixture: ComponentFixture<TestComponent1730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1730Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
