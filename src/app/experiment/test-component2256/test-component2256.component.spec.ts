import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2256Component } from './test-component2256.component';

describe('TestComponent2256Component', () => {
  let component: TestComponent2256Component;
  let fixture: ComponentFixture<TestComponent2256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
