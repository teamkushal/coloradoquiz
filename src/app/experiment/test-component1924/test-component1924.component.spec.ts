import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1924Component } from './test-component1924.component';

describe('TestComponent1924Component', () => {
  let component: TestComponent1924Component;
  let fixture: ComponentFixture<TestComponent1924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1924Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
