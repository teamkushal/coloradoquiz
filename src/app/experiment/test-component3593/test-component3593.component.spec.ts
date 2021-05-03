import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3593Component } from './test-component3593.component';

describe('TestComponent3593Component', () => {
  let component: TestComponent3593Component;
  let fixture: ComponentFixture<TestComponent3593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3593Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
