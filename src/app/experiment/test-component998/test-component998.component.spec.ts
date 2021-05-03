import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent998Component } from './test-component998.component';

describe('TestComponent998Component', () => {
  let component: TestComponent998Component;
  let fixture: ComponentFixture<TestComponent998Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent998Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
