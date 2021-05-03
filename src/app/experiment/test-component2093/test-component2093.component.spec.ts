import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2093Component } from './test-component2093.component';

describe('TestComponent2093Component', () => {
  let component: TestComponent2093Component;
  let fixture: ComponentFixture<TestComponent2093Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2093Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
