import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2443Component } from './test-component2443.component';

describe('TestComponent2443Component', () => {
  let component: TestComponent2443Component;
  let fixture: ComponentFixture<TestComponent2443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2443Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
