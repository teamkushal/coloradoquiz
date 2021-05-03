import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2581Component } from './test-component2581.component';

describe('TestComponent2581Component', () => {
  let component: TestComponent2581Component;
  let fixture: ComponentFixture<TestComponent2581Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2581Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
