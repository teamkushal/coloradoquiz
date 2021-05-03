import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent232Component } from './test-component232.component';

describe('TestComponent232Component', () => {
  let component: TestComponent232Component;
  let fixture: ComponentFixture<TestComponent232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
