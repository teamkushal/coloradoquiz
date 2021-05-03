import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1106Component } from './test-component1106.component';

describe('TestComponent1106Component', () => {
  let component: TestComponent1106Component;
  let fixture: ComponentFixture<TestComponent1106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
