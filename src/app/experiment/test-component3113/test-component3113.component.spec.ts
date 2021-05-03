import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3113Component } from './test-component3113.component';

describe('TestComponent3113Component', () => {
  let component: TestComponent3113Component;
  let fixture: ComponentFixture<TestComponent3113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
