import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3581Component } from './test-component3581.component';

describe('TestComponent3581Component', () => {
  let component: TestComponent3581Component;
  let fixture: ComponentFixture<TestComponent3581Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3581Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
