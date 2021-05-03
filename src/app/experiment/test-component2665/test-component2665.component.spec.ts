import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2665Component } from './test-component2665.component';

describe('TestComponent2665Component', () => {
  let component: TestComponent2665Component;
  let fixture: ComponentFixture<TestComponent2665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2665Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
