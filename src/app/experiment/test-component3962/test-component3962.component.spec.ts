import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3962Component } from './test-component3962.component';

describe('TestComponent3962Component', () => {
  let component: TestComponent3962Component;
  let fixture: ComponentFixture<TestComponent3962Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3962Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
