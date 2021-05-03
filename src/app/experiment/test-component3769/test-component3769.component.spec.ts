import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3769Component } from './test-component3769.component';

describe('TestComponent3769Component', () => {
  let component: TestComponent3769Component;
  let fixture: ComponentFixture<TestComponent3769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3769Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
