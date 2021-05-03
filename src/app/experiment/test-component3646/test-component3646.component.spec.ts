import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3646Component } from './test-component3646.component';

describe('TestComponent3646Component', () => {
  let component: TestComponent3646Component;
  let fixture: ComponentFixture<TestComponent3646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3646Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
