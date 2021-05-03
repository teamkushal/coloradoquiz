import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3707Component } from './test-component3707.component';

describe('TestComponent3707Component', () => {
  let component: TestComponent3707Component;
  let fixture: ComponentFixture<TestComponent3707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3707Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
