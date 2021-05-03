import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3478Component } from './test-component3478.component';

describe('TestComponent3478Component', () => {
  let component: TestComponent3478Component;
  let fixture: ComponentFixture<TestComponent3478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3478Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
