import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1127Component } from './test-component1127.component';

describe('TestComponent1127Component', () => {
  let component: TestComponent1127Component;
  let fixture: ComponentFixture<TestComponent1127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
