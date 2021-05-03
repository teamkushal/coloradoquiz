import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1864Component } from './test-component1864.component';

describe('TestComponent1864Component', () => {
  let component: TestComponent1864Component;
  let fixture: ComponentFixture<TestComponent1864Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1864Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
