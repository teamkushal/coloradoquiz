import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3529Component } from './test-component3529.component';

describe('TestComponent3529Component', () => {
  let component: TestComponent3529Component;
  let fixture: ComponentFixture<TestComponent3529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3529Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
