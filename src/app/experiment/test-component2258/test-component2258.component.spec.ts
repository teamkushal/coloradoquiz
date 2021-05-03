import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2258Component } from './test-component2258.component';

describe('TestComponent2258Component', () => {
  let component: TestComponent2258Component;
  let fixture: ComponentFixture<TestComponent2258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
