import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1435Component } from './test-component1435.component';

describe('TestComponent1435Component', () => {
  let component: TestComponent1435Component;
  let fixture: ComponentFixture<TestComponent1435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1435Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
