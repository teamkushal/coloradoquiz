import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1266Component } from './test-component1266.component';

describe('TestComponent1266Component', () => {
  let component: TestComponent1266Component;
  let fixture: ComponentFixture<TestComponent1266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
