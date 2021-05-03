import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3544Component } from './test-component3544.component';

describe('TestComponent3544Component', () => {
  let component: TestComponent3544Component;
  let fixture: ComponentFixture<TestComponent3544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3544Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
