import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1700Component } from './test-component1700.component';

describe('TestComponent1700Component', () => {
  let component: TestComponent1700Component;
  let fixture: ComponentFixture<TestComponent1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
