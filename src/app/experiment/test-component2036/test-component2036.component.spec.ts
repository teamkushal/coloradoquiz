import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2036Component } from './test-component2036.component';

describe('TestComponent2036Component', () => {
  let component: TestComponent2036Component;
  let fixture: ComponentFixture<TestComponent2036Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2036Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
