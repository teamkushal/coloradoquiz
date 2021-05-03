import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3513Component } from './test-component3513.component';

describe('TestComponent3513Component', () => {
  let component: TestComponent3513Component;
  let fixture: ComponentFixture<TestComponent3513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3513Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
