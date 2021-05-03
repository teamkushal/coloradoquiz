import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3327Component } from './test-component3327.component';

describe('TestComponent3327Component', () => {
  let component: TestComponent3327Component;
  let fixture: ComponentFixture<TestComponent3327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
