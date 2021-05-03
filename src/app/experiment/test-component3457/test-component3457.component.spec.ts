import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3457Component } from './test-component3457.component';

describe('TestComponent3457Component', () => {
  let component: TestComponent3457Component;
  let fixture: ComponentFixture<TestComponent3457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3457Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
