import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3320Component } from './test-component3320.component';

describe('TestComponent3320Component', () => {
  let component: TestComponent3320Component;
  let fixture: ComponentFixture<TestComponent3320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
