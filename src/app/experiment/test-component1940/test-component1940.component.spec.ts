import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1940Component } from './test-component1940.component';

describe('TestComponent1940Component', () => {
  let component: TestComponent1940Component;
  let fixture: ComponentFixture<TestComponent1940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1940Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
