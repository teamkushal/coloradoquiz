import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3561Component } from './test-component3561.component';

describe('TestComponent3561Component', () => {
  let component: TestComponent3561Component;
  let fixture: ComponentFixture<TestComponent3561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3561Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
