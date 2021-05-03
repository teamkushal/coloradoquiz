import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent848Component } from './test-component848.component';

describe('TestComponent848Component', () => {
  let component: TestComponent848Component;
  let fixture: ComponentFixture<TestComponent848Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent848Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
