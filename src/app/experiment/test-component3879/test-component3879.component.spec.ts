import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3879Component } from './test-component3879.component';

describe('TestComponent3879Component', () => {
  let component: TestComponent3879Component;
  let fixture: ComponentFixture<TestComponent3879Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3879Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
