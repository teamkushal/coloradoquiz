import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2052Component } from './test-component2052.component';

describe('TestComponent2052Component', () => {
  let component: TestComponent2052Component;
  let fixture: ComponentFixture<TestComponent2052Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2052Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
