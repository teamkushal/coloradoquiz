import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3485Component } from './test-component3485.component';

describe('TestComponent3485Component', () => {
  let component: TestComponent3485Component;
  let fixture: ComponentFixture<TestComponent3485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3485Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
