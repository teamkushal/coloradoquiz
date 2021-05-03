import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3472Component } from './test-component3472.component';

describe('TestComponent3472Component', () => {
  let component: TestComponent3472Component;
  let fixture: ComponentFixture<TestComponent3472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3472Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
