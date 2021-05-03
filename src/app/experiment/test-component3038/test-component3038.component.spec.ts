import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3038Component } from './test-component3038.component';

describe('TestComponent3038Component', () => {
  let component: TestComponent3038Component;
  let fixture: ComponentFixture<TestComponent3038Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3038Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
