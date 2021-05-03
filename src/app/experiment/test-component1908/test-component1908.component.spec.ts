import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1908Component } from './test-component1908.component';

describe('TestComponent1908Component', () => {
  let component: TestComponent1908Component;
  let fixture: ComponentFixture<TestComponent1908Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1908Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
