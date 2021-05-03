import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1859Component } from './test-component1859.component';

describe('TestComponent1859Component', () => {
  let component: TestComponent1859Component;
  let fixture: ComponentFixture<TestComponent1859Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1859Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
