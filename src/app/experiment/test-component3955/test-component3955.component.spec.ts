import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3955Component } from './test-component3955.component';

describe('TestComponent3955Component', () => {
  let component: TestComponent3955Component;
  let fixture: ComponentFixture<TestComponent3955Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3955Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
