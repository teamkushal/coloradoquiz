import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2229Component } from './test-component2229.component';

describe('TestComponent2229Component', () => {
  let component: TestComponent2229Component;
  let fixture: ComponentFixture<TestComponent2229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
