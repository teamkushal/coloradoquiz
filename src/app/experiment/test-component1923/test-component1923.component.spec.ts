import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1923Component } from './test-component1923.component';

describe('TestComponent1923Component', () => {
  let component: TestComponent1923Component;
  let fixture: ComponentFixture<TestComponent1923Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1923Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
