import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent924Component } from './test-component924.component';

describe('TestComponent924Component', () => {
  let component: TestComponent924Component;
  let fixture: ComponentFixture<TestComponent924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent924Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
