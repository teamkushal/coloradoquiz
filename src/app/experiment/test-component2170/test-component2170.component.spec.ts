import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2170Component } from './test-component2170.component';

describe('TestComponent2170Component', () => {
  let component: TestComponent2170Component;
  let fixture: ComponentFixture<TestComponent2170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
