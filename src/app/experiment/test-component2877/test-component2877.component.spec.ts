import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2877Component } from './test-component2877.component';

describe('TestComponent2877Component', () => {
  let component: TestComponent2877Component;
  let fixture: ComponentFixture<TestComponent2877Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2877Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
