import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2857Component } from './test-component2857.component';

describe('TestComponent2857Component', () => {
  let component: TestComponent2857Component;
  let fixture: ComponentFixture<TestComponent2857Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2857Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
