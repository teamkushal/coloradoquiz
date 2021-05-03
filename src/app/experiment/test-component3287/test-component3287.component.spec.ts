import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3287Component } from './test-component3287.component';

describe('TestComponent3287Component', () => {
  let component: TestComponent3287Component;
  let fixture: ComponentFixture<TestComponent3287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
