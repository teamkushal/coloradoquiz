import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3606Component } from './test-component3606.component';

describe('TestComponent3606Component', () => {
  let component: TestComponent3606Component;
  let fixture: ComponentFixture<TestComponent3606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3606Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
