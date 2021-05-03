import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent847Component } from './test-component847.component';

describe('TestComponent847Component', () => {
  let component: TestComponent847Component;
  let fixture: ComponentFixture<TestComponent847Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent847Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
