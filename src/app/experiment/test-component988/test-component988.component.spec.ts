import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent988Component } from './test-component988.component';

describe('TestComponent988Component', () => {
  let component: TestComponent988Component;
  let fixture: ComponentFixture<TestComponent988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent988Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
