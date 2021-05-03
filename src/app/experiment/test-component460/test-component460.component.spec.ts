import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent460Component } from './test-component460.component';

describe('TestComponent460Component', () => {
  let component: TestComponent460Component;
  let fixture: ComponentFixture<TestComponent460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent460Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
