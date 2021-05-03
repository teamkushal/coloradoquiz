import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3715Component } from './test-component3715.component';

describe('TestComponent3715Component', () => {
  let component: TestComponent3715Component;
  let fixture: ComponentFixture<TestComponent3715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3715Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
