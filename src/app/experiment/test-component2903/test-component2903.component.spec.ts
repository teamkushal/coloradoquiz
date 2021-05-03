import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2903Component } from './test-component2903.component';

describe('TestComponent2903Component', () => {
  let component: TestComponent2903Component;
  let fixture: ComponentFixture<TestComponent2903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2903Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
