import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2771Component } from './test-component2771.component';

describe('TestComponent2771Component', () => {
  let component: TestComponent2771Component;
  let fixture: ComponentFixture<TestComponent2771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2771Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
