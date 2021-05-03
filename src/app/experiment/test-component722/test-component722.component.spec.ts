import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent722Component } from './test-component722.component';

describe('TestComponent722Component', () => {
  let component: TestComponent722Component;
  let fixture: ComponentFixture<TestComponent722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent722Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
