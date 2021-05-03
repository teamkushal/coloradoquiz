import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3117Component } from './test-component3117.component';

describe('TestComponent3117Component', () => {
  let component: TestComponent3117Component;
  let fixture: ComponentFixture<TestComponent3117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
