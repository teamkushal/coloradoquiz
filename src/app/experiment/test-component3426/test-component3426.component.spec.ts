import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3426Component } from './test-component3426.component';

describe('TestComponent3426Component', () => {
  let component: TestComponent3426Component;
  let fixture: ComponentFixture<TestComponent3426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
