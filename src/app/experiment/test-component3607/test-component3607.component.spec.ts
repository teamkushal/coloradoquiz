import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3607Component } from './test-component3607.component';

describe('TestComponent3607Component', () => {
  let component: TestComponent3607Component;
  let fixture: ComponentFixture<TestComponent3607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3607Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
