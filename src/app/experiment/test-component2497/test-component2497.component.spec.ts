import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2497Component } from './test-component2497.component';

describe('TestComponent2497Component', () => {
  let component: TestComponent2497Component;
  let fixture: ComponentFixture<TestComponent2497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2497Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
