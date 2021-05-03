import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent841Component } from './test-component841.component';

describe('TestComponent841Component', () => {
  let component: TestComponent841Component;
  let fixture: ComponentFixture<TestComponent841Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent841Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
