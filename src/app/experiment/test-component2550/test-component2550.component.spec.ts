import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2550Component } from './test-component2550.component';

describe('TestComponent2550Component', () => {
  let component: TestComponent2550Component;
  let fixture: ComponentFixture<TestComponent2550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2550Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
