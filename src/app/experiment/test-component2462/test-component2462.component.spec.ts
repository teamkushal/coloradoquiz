import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2462Component } from './test-component2462.component';

describe('TestComponent2462Component', () => {
  let component: TestComponent2462Component;
  let fixture: ComponentFixture<TestComponent2462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2462Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
