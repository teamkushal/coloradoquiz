import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2204Component } from './test-component2204.component';

describe('TestComponent2204Component', () => {
  let component: TestComponent2204Component;
  let fixture: ComponentFixture<TestComponent2204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
