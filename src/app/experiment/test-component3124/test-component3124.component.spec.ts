import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3124Component } from './test-component3124.component';

describe('TestComponent3124Component', () => {
  let component: TestComponent3124Component;
  let fixture: ComponentFixture<TestComponent3124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
