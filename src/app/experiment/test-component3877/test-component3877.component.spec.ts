import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3877Component } from './test-component3877.component';

describe('TestComponent3877Component', () => {
  let component: TestComponent3877Component;
  let fixture: ComponentFixture<TestComponent3877Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3877Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
