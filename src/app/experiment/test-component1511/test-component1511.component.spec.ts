import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1511Component } from './test-component1511.component';

describe('TestComponent1511Component', () => {
  let component: TestComponent1511Component;
  let fixture: ComponentFixture<TestComponent1511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1511Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
