import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent644Component } from './test-component644.component';

describe('TestComponent644Component', () => {
  let component: TestComponent644Component;
  let fixture: ComponentFixture<TestComponent644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent644Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
