import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2822Component } from './test-component2822.component';

describe('TestComponent2822Component', () => {
  let component: TestComponent2822Component;
  let fixture: ComponentFixture<TestComponent2822Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2822Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
