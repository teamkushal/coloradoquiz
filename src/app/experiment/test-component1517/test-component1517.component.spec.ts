import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1517Component } from './test-component1517.component';

describe('TestComponent1517Component', () => {
  let component: TestComponent1517Component;
  let fixture: ComponentFixture<TestComponent1517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1517Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
