import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1762Component } from './test-component1762.component';

describe('TestComponent1762Component', () => {
  let component: TestComponent1762Component;
  let fixture: ComponentFixture<TestComponent1762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1762Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
