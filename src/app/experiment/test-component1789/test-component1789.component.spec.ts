import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1789Component } from './test-component1789.component';

describe('TestComponent1789Component', () => {
  let component: TestComponent1789Component;
  let fixture: ComponentFixture<TestComponent1789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1789Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
