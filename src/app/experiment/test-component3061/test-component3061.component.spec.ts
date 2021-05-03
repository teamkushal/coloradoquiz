import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3061Component } from './test-component3061.component';

describe('TestComponent3061Component', () => {
  let component: TestComponent3061Component;
  let fixture: ComponentFixture<TestComponent3061Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3061Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
