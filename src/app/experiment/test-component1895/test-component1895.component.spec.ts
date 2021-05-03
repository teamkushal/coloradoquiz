import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1895Component } from './test-component1895.component';

describe('TestComponent1895Component', () => {
  let component: TestComponent1895Component;
  let fixture: ComponentFixture<TestComponent1895Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1895Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
