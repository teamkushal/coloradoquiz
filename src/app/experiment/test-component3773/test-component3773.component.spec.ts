import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3773Component } from './test-component3773.component';

describe('TestComponent3773Component', () => {
  let component: TestComponent3773Component;
  let fixture: ComponentFixture<TestComponent3773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3773Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
