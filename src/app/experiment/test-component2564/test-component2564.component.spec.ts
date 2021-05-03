import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2564Component } from './test-component2564.component';

describe('TestComponent2564Component', () => {
  let component: TestComponent2564Component;
  let fixture: ComponentFixture<TestComponent2564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2564Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
