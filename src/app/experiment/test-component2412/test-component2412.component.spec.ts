import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2412Component } from './test-component2412.component';

describe('TestComponent2412Component', () => {
  let component: TestComponent2412Component;
  let fixture: ComponentFixture<TestComponent2412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
