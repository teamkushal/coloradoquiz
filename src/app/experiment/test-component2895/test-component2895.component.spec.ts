import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2895Component } from './test-component2895.component';

describe('TestComponent2895Component', () => {
  let component: TestComponent2895Component;
  let fixture: ComponentFixture<TestComponent2895Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2895Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
