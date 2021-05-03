import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3269Component } from './test-component3269.component';

describe('TestComponent3269Component', () => {
  let component: TestComponent3269Component;
  let fixture: ComponentFixture<TestComponent3269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
