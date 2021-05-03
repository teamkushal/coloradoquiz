import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent182Component } from './test-component182.component';

describe('TestComponent182Component', () => {
  let component: TestComponent182Component;
  let fixture: ComponentFixture<TestComponent182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
