import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent668Component } from './test-component668.component';

describe('TestComponent668Component', () => {
  let component: TestComponent668Component;
  let fixture: ComponentFixture<TestComponent668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent668Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
