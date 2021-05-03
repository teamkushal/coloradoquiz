import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2130Component } from './test-component2130.component';

describe('TestComponent2130Component', () => {
  let component: TestComponent2130Component;
  let fixture: ComponentFixture<TestComponent2130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
