import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2681Component } from './test-component2681.component';

describe('TestComponent2681Component', () => {
  let component: TestComponent2681Component;
  let fixture: ComponentFixture<TestComponent2681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2681Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
