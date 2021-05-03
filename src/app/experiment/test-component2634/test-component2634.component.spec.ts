import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2634Component } from './test-component2634.component';

describe('TestComponent2634Component', () => {
  let component: TestComponent2634Component;
  let fixture: ComponentFixture<TestComponent2634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2634Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
