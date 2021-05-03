import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3276Component } from './test-component3276.component';

describe('TestComponent3276Component', () => {
  let component: TestComponent3276Component;
  let fixture: ComponentFixture<TestComponent3276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
