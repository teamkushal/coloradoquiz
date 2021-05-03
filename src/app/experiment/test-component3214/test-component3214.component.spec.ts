import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3214Component } from './test-component3214.component';

describe('TestComponent3214Component', () => {
  let component: TestComponent3214Component;
  let fixture: ComponentFixture<TestComponent3214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
