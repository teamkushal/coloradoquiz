import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3492Component } from './test-component3492.component';

describe('TestComponent3492Component', () => {
  let component: TestComponent3492Component;
  let fixture: ComponentFixture<TestComponent3492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3492Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
