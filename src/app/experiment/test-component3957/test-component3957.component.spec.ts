import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3957Component } from './test-component3957.component';

describe('TestComponent3957Component', () => {
  let component: TestComponent3957Component;
  let fixture: ComponentFixture<TestComponent3957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3957Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
