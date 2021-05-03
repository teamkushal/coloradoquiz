import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1931Component } from './test-component1931.component';

describe('TestComponent1931Component', () => {
  let component: TestComponent1931Component;
  let fixture: ComponentFixture<TestComponent1931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1931Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
