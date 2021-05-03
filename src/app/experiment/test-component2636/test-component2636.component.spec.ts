import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2636Component } from './test-component2636.component';

describe('TestComponent2636Component', () => {
  let component: TestComponent2636Component;
  let fixture: ComponentFixture<TestComponent2636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2636Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
