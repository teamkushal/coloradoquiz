import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3510Component } from './test-component3510.component';

describe('TestComponent3510Component', () => {
  let component: TestComponent3510Component;
  let fixture: ComponentFixture<TestComponent3510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3510Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
