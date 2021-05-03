import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent599Component } from './test-component599.component';

describe('TestComponent599Component', () => {
  let component: TestComponent599Component;
  let fixture: ComponentFixture<TestComponent599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent599Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
