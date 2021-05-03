import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent56Component } from './test-component56.component';

describe('TestComponent56Component', () => {
  let component: TestComponent56Component;
  let fixture: ComponentFixture<TestComponent56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
