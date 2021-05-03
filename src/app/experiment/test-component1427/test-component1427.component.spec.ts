import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1427Component } from './test-component1427.component';

describe('TestComponent1427Component', () => {
  let component: TestComponent1427Component;
  let fixture: ComponentFixture<TestComponent1427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
