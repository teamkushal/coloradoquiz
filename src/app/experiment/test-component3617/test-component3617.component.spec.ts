import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3617Component } from './test-component3617.component';

describe('TestComponent3617Component', () => {
  let component: TestComponent3617Component;
  let fixture: ComponentFixture<TestComponent3617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3617Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
