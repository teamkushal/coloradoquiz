import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3859Component } from './test-component3859.component';

describe('TestComponent3859Component', () => {
  let component: TestComponent3859Component;
  let fixture: ComponentFixture<TestComponent3859Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3859Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
