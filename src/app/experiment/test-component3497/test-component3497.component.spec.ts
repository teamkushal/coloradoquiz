import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3497Component } from './test-component3497.component';

describe('TestComponent3497Component', () => {
  let component: TestComponent3497Component;
  let fixture: ComponentFixture<TestComponent3497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3497Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
