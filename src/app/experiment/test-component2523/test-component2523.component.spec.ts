import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2523Component } from './test-component2523.component';

describe('TestComponent2523Component', () => {
  let component: TestComponent2523Component;
  let fixture: ComponentFixture<TestComponent2523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2523Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
