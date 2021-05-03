import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3623Component } from './test-component3623.component';

describe('TestComponent3623Component', () => {
  let component: TestComponent3623Component;
  let fixture: ComponentFixture<TestComponent3623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3623Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
