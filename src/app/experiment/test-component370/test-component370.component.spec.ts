import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent370Component } from './test-component370.component';

describe('TestComponent370Component', () => {
  let component: TestComponent370Component;
  let fixture: ComponentFixture<TestComponent370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
