import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2798Component } from './test-component2798.component';

describe('TestComponent2798Component', () => {
  let component: TestComponent2798Component;
  let fixture: ComponentFixture<TestComponent2798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2798Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
