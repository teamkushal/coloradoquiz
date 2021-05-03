import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1537Component } from './test-component1537.component';

describe('TestComponent1537Component', () => {
  let component: TestComponent1537Component;
  let fixture: ComponentFixture<TestComponent1537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1537Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
