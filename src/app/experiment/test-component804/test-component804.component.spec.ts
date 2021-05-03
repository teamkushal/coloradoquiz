import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent804Component } from './test-component804.component';

describe('TestComponent804Component', () => {
  let component: TestComponent804Component;
  let fixture: ComponentFixture<TestComponent804Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent804Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
