import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent67Component } from './test-component67.component';

describe('TestComponent67Component', () => {
  let component: TestComponent67Component;
  let fixture: ComponentFixture<TestComponent67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
