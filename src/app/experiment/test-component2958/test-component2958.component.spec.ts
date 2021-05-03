import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2958Component } from './test-component2958.component';

describe('TestComponent2958Component', () => {
  let component: TestComponent2958Component;
  let fixture: ComponentFixture<TestComponent2958Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2958Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
