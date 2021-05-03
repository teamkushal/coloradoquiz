import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2268Component } from './test-component2268.component';

describe('TestComponent2268Component', () => {
  let component: TestComponent2268Component;
  let fixture: ComponentFixture<TestComponent2268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
