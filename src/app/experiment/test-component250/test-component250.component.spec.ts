import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent250Component } from './test-component250.component';

describe('TestComponent250Component', () => {
  let component: TestComponent250Component;
  let fixture: ComponentFixture<TestComponent250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
