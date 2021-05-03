import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2818Component } from './test-component2818.component';

describe('TestComponent2818Component', () => {
  let component: TestComponent2818Component;
  let fixture: ComponentFixture<TestComponent2818Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2818Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
