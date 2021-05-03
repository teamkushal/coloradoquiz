import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2902Component } from './test-component2902.component';

describe('TestComponent2902Component', () => {
  let component: TestComponent2902Component;
  let fixture: ComponentFixture<TestComponent2902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2902Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
