import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1963Component } from './test-component1963.component';

describe('TestComponent1963Component', () => {
  let component: TestComponent1963Component;
  let fixture: ComponentFixture<TestComponent1963Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1963Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
