import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2561Component } from './test-component2561.component';

describe('TestComponent2561Component', () => {
  let component: TestComponent2561Component;
  let fixture: ComponentFixture<TestComponent2561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2561Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
