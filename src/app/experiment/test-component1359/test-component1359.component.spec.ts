import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1359Component } from './test-component1359.component';

describe('TestComponent1359Component', () => {
  let component: TestComponent1359Component;
  let fixture: ComponentFixture<TestComponent1359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
