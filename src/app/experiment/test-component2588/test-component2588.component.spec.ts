import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2588Component } from './test-component2588.component';

describe('TestComponent2588Component', () => {
  let component: TestComponent2588Component;
  let fixture: ComponentFixture<TestComponent2588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2588Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
