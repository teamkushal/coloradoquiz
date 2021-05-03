import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2804Component } from './test-component2804.component';

describe('TestComponent2804Component', () => {
  let component: TestComponent2804Component;
  let fixture: ComponentFixture<TestComponent2804Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2804Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
