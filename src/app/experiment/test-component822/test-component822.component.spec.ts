import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent822Component } from './test-component822.component';

describe('TestComponent822Component', () => {
  let component: TestComponent822Component;
  let fixture: ComponentFixture<TestComponent822Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent822Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
