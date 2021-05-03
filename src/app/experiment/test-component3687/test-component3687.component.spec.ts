import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3687Component } from './test-component3687.component';

describe('TestComponent3687Component', () => {
  let component: TestComponent3687Component;
  let fixture: ComponentFixture<TestComponent3687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3687Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
