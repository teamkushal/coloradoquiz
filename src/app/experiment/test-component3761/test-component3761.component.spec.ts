import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3761Component } from './test-component3761.component';

describe('TestComponent3761Component', () => {
  let component: TestComponent3761Component;
  let fixture: ComponentFixture<TestComponent3761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3761Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
