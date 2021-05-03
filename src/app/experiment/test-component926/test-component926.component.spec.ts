import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent926Component } from './test-component926.component';

describe('TestComponent926Component', () => {
  let component: TestComponent926Component;
  let fixture: ComponentFixture<TestComponent926Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent926Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
