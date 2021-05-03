import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3081Component } from './test-component3081.component';

describe('TestComponent3081Component', () => {
  let component: TestComponent3081Component;
  let fixture: ComponentFixture<TestComponent3081Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3081Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
