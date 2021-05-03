import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3224Component } from './test-component3224.component';

describe('TestComponent3224Component', () => {
  let component: TestComponent3224Component;
  let fixture: ComponentFixture<TestComponent3224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
