import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1759Component } from './test-component1759.component';

describe('TestComponent1759Component', () => {
  let component: TestComponent1759Component;
  let fixture: ComponentFixture<TestComponent1759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1759Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
