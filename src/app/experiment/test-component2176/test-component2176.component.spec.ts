import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2176Component } from './test-component2176.component';

describe('TestComponent2176Component', () => {
  let component: TestComponent2176Component;
  let fixture: ComponentFixture<TestComponent2176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
