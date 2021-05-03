import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1311Component } from './test-component1311.component';

describe('TestComponent1311Component', () => {
  let component: TestComponent1311Component;
  let fixture: ComponentFixture<TestComponent1311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
