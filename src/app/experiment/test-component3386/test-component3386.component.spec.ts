import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3386Component } from './test-component3386.component';

describe('TestComponent3386Component', () => {
  let component: TestComponent3386Component;
  let fixture: ComponentFixture<TestComponent3386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
