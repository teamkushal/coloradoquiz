import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3595Component } from './test-component3595.component';

describe('TestComponent3595Component', () => {
  let component: TestComponent3595Component;
  let fixture: ComponentFixture<TestComponent3595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3595Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
