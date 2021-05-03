import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2496Component } from './test-component2496.component';

describe('TestComponent2496Component', () => {
  let component: TestComponent2496Component;
  let fixture: ComponentFixture<TestComponent2496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2496Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
