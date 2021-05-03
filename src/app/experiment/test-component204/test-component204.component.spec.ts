import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent204Component } from './test-component204.component';

describe('TestComponent204Component', () => {
  let component: TestComponent204Component;
  let fixture: ComponentFixture<TestComponent204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
