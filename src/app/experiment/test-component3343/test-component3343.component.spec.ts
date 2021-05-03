import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3343Component } from './test-component3343.component';

describe('TestComponent3343Component', () => {
  let component: TestComponent3343Component;
  let fixture: ComponentFixture<TestComponent3343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
