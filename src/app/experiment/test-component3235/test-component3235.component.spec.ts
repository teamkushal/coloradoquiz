import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3235Component } from './test-component3235.component';

describe('TestComponent3235Component', () => {
  let component: TestComponent3235Component;
  let fixture: ComponentFixture<TestComponent3235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
