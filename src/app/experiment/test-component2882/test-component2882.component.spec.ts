import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2882Component } from './test-component2882.component';

describe('TestComponent2882Component', () => {
  let component: TestComponent2882Component;
  let fixture: ComponentFixture<TestComponent2882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2882Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
