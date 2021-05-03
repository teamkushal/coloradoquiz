import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3298Component } from './test-component3298.component';

describe('TestComponent3298Component', () => {
  let component: TestComponent3298Component;
  let fixture: ComponentFixture<TestComponent3298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
