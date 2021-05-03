import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent109Component } from './test-component109.component';

describe('TestComponent109Component', () => {
  let component: TestComponent109Component;
  let fixture: ComponentFixture<TestComponent109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
