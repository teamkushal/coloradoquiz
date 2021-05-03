import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3639Component } from './test-component3639.component';

describe('TestComponent3639Component', () => {
  let component: TestComponent3639Component;
  let fixture: ComponentFixture<TestComponent3639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3639Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
