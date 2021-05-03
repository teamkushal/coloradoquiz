import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3550Component } from './test-component3550.component';

describe('TestComponent3550Component', () => {
  let component: TestComponent3550Component;
  let fixture: ComponentFixture<TestComponent3550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3550Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
