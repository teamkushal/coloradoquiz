import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3827Component } from './test-component3827.component';

describe('TestComponent3827Component', () => {
  let component: TestComponent3827Component;
  let fixture: ComponentFixture<TestComponent3827Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3827Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
