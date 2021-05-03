import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent459Component } from './test-component459.component';

describe('TestComponent459Component', () => {
  let component: TestComponent459Component;
  let fixture: ComponentFixture<TestComponent459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent459Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
