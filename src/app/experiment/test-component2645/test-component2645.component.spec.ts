import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2645Component } from './test-component2645.component';

describe('TestComponent2645Component', () => {
  let component: TestComponent2645Component;
  let fixture: ComponentFixture<TestComponent2645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2645Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
