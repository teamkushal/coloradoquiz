import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3668Component } from './test-component3668.component';

describe('TestComponent3668Component', () => {
  let component: TestComponent3668Component;
  let fixture: ComponentFixture<TestComponent3668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3668Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
