import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1008Component } from './test-component1008.component';

describe('TestComponent1008Component', () => {
  let component: TestComponent1008Component;
  let fixture: ComponentFixture<TestComponent1008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
