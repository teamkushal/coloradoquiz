import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1499Component } from './test-component1499.component';

describe('TestComponent1499Component', () => {
  let component: TestComponent1499Component;
  let fixture: ComponentFixture<TestComponent1499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1499Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
