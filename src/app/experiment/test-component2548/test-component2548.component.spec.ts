import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2548Component } from './test-component2548.component';

describe('TestComponent2548Component', () => {
  let component: TestComponent2548Component;
  let fixture: ComponentFixture<TestComponent2548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2548Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
