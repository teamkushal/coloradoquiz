import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2992Component } from './test-component2992.component';

describe('TestComponent2992Component', () => {
  let component: TestComponent2992Component;
  let fixture: ComponentFixture<TestComponent2992Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2992Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
