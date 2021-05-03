import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3678Component } from './test-component3678.component';

describe('TestComponent3678Component', () => {
  let component: TestComponent3678Component;
  let fixture: ComponentFixture<TestComponent3678Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3678Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
