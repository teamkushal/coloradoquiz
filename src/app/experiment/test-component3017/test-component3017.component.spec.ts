import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3017Component } from './test-component3017.component';

describe('TestComponent3017Component', () => {
  let component: TestComponent3017Component;
  let fixture: ComponentFixture<TestComponent3017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
