import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2146Component } from './test-component2146.component';

describe('TestComponent2146Component', () => {
  let component: TestComponent2146Component;
  let fixture: ComponentFixture<TestComponent2146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
