import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2618Component } from './test-component2618.component';

describe('TestComponent2618Component', () => {
  let component: TestComponent2618Component;
  let fixture: ComponentFixture<TestComponent2618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2618Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
