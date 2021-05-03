import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1619Component } from './test-component1619.component';

describe('TestComponent1619Component', () => {
  let component: TestComponent1619Component;
  let fixture: ComponentFixture<TestComponent1619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1619Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
