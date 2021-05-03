import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3461Component } from './test-component3461.component';

describe('TestComponent3461Component', () => {
  let component: TestComponent3461Component;
  let fixture: ComponentFixture<TestComponent3461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3461Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
