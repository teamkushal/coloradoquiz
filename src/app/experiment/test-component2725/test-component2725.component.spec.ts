import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2725Component } from './test-component2725.component';

describe('TestComponent2725Component', () => {
  let component: TestComponent2725Component;
  let fixture: ComponentFixture<TestComponent2725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2725Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
