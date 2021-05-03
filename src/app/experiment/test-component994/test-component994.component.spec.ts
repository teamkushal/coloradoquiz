import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent994Component } from './test-component994.component';

describe('TestComponent994Component', () => {
  let component: TestComponent994Component;
  let fixture: ComponentFixture<TestComponent994Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent994Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
