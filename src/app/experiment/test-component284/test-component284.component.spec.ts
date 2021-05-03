import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent284Component } from './test-component284.component';

describe('TestComponent284Component', () => {
  let component: TestComponent284Component;
  let fixture: ComponentFixture<TestComponent284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
