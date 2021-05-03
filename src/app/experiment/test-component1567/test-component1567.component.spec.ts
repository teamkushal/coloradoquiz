import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1567Component } from './test-component1567.component';

describe('TestComponent1567Component', () => {
  let component: TestComponent1567Component;
  let fixture: ComponentFixture<TestComponent1567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1567Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
