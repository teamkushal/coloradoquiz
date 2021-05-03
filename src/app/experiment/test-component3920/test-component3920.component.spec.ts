import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3920Component } from './test-component3920.component';

describe('TestComponent3920Component', () => {
  let component: TestComponent3920Component;
  let fixture: ComponentFixture<TestComponent3920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3920Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
