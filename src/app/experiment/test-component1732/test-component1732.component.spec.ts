import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1732Component } from './test-component1732.component';

describe('TestComponent1732Component', () => {
  let component: TestComponent1732Component;
  let fixture: ComponentFixture<TestComponent1732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1732Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
