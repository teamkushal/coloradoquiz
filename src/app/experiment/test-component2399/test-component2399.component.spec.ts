import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2399Component } from './test-component2399.component';

describe('TestComponent2399Component', () => {
  let component: TestComponent2399Component;
  let fixture: ComponentFixture<TestComponent2399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2399Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
