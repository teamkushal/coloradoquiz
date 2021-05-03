import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3888Component } from './test-component3888.component';

describe('TestComponent3888Component', () => {
  let component: TestComponent3888Component;
  let fixture: ComponentFixture<TestComponent3888Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3888Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
