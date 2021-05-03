import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3777Component } from './test-component3777.component';

describe('TestComponent3777Component', () => {
  let component: TestComponent3777Component;
  let fixture: ComponentFixture<TestComponent3777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3777Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
