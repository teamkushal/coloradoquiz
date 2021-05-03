import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent990Component } from './test-component990.component';

describe('TestComponent990Component', () => {
  let component: TestComponent990Component;
  let fixture: ComponentFixture<TestComponent990Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent990Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
