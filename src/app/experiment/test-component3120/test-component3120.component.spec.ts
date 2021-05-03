import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3120Component } from './test-component3120.component';

describe('TestComponent3120Component', () => {
  let component: TestComponent3120Component;
  let fixture: ComponentFixture<TestComponent3120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
