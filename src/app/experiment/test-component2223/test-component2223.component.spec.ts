import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2223Component } from './test-component2223.component';

describe('TestComponent2223Component', () => {
  let component: TestComponent2223Component;
  let fixture: ComponentFixture<TestComponent2223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
