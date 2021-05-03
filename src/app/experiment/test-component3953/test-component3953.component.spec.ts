import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3953Component } from './test-component3953.component';

describe('TestComponent3953Component', () => {
  let component: TestComponent3953Component;
  let fixture: ComponentFixture<TestComponent3953Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3953Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
