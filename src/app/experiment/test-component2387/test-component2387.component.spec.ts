import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2387Component } from './test-component2387.component';

describe('TestComponent2387Component', () => {
  let component: TestComponent2387Component;
  let fixture: ComponentFixture<TestComponent2387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
