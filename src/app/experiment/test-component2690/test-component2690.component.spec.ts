import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2690Component } from './test-component2690.component';

describe('TestComponent2690Component', () => {
  let component: TestComponent2690Component;
  let fixture: ComponentFixture<TestComponent2690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2690Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
