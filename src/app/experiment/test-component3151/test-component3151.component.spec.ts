import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3151Component } from './test-component3151.component';

describe('TestComponent3151Component', () => {
  let component: TestComponent3151Component;
  let fixture: ComponentFixture<TestComponent3151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
