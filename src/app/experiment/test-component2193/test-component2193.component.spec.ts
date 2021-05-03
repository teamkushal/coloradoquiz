import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2193Component } from './test-component2193.component';

describe('TestComponent2193Component', () => {
  let component: TestComponent2193Component;
  let fixture: ComponentFixture<TestComponent2193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
