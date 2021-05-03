import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3648Component } from './test-component3648.component';

describe('TestComponent3648Component', () => {
  let component: TestComponent3648Component;
  let fixture: ComponentFixture<TestComponent3648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3648Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
