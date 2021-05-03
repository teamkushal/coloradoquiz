import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3624Component } from './test-component3624.component';

describe('TestComponent3624Component', () => {
  let component: TestComponent3624Component;
  let fixture: ComponentFixture<TestComponent3624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3624Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
