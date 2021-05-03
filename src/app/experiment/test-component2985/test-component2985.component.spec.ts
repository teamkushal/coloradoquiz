import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2985Component } from './test-component2985.component';

describe('TestComponent2985Component', () => {
  let component: TestComponent2985Component;
  let fixture: ComponentFixture<TestComponent2985Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2985Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
