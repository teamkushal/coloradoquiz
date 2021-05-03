import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1960Component } from './test-component1960.component';

describe('TestComponent1960Component', () => {
  let component: TestComponent1960Component;
  let fixture: ComponentFixture<TestComponent1960Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1960Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
