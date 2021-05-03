import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3570Component } from './test-component3570.component';

describe('TestComponent3570Component', () => {
  let component: TestComponent3570Component;
  let fixture: ComponentFixture<TestComponent3570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3570Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
