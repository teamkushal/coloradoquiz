import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3373Component } from './test-component3373.component';

describe('TestComponent3373Component', () => {
  let component: TestComponent3373Component;
  let fixture: ComponentFixture<TestComponent3373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
