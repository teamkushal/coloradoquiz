import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1841Component } from './test-component1841.component';

describe('TestComponent1841Component', () => {
  let component: TestComponent1841Component;
  let fixture: ComponentFixture<TestComponent1841Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1841Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
