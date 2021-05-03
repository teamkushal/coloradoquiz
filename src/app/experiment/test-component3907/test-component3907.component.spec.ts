import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3907Component } from './test-component3907.component';

describe('TestComponent3907Component', () => {
  let component: TestComponent3907Component;
  let fixture: ComponentFixture<TestComponent3907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3907Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
