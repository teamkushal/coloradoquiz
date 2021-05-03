import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2153Component } from './test-component2153.component';

describe('TestComponent2153Component', () => {
  let component: TestComponent2153Component;
  let fixture: ComponentFixture<TestComponent2153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
