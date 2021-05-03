import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1504Component } from './test-component1504.component';

describe('TestComponent1504Component', () => {
  let component: TestComponent1504Component;
  let fixture: ComponentFixture<TestComponent1504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1504Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
