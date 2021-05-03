import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3007Component } from './test-component3007.component';

describe('TestComponent3007Component', () => {
  let component: TestComponent3007Component;
  let fixture: ComponentFixture<TestComponent3007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
