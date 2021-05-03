import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2834Component } from './test-component2834.component';

describe('TestComponent2834Component', () => {
  let component: TestComponent2834Component;
  let fixture: ComponentFixture<TestComponent2834Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2834Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
