import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3271Component } from './test-component3271.component';

describe('TestComponent3271Component', () => {
  let component: TestComponent3271Component;
  let fixture: ComponentFixture<TestComponent3271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
