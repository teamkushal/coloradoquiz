import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3642Component } from './test-component3642.component';

describe('TestComponent3642Component', () => {
  let component: TestComponent3642Component;
  let fixture: ComponentFixture<TestComponent3642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3642Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
