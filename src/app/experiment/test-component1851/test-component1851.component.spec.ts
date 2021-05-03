import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1851Component } from './test-component1851.component';

describe('TestComponent1851Component', () => {
  let component: TestComponent1851Component;
  let fixture: ComponentFixture<TestComponent1851Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1851Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
