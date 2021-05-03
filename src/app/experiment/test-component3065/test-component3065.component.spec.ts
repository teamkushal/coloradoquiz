import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3065Component } from './test-component3065.component';

describe('TestComponent3065Component', () => {
  let component: TestComponent3065Component;
  let fixture: ComponentFixture<TestComponent3065Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3065Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
