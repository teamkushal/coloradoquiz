import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3887Component } from './test-component3887.component';

describe('TestComponent3887Component', () => {
  let component: TestComponent3887Component;
  let fixture: ComponentFixture<TestComponent3887Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3887Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
