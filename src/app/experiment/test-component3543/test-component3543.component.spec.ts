import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3543Component } from './test-component3543.component';

describe('TestComponent3543Component', () => {
  let component: TestComponent3543Component;
  let fixture: ComponentFixture<TestComponent3543Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3543Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
