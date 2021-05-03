import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1142Component } from './test-component1142.component';

describe('TestComponent1142Component', () => {
  let component: TestComponent1142Component;
  let fixture: ComponentFixture<TestComponent1142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
