import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2529Component } from './test-component2529.component';

describe('TestComponent2529Component', () => {
  let component: TestComponent2529Component;
  let fixture: ComponentFixture<TestComponent2529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2529Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
