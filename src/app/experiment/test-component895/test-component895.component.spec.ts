import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent895Component } from './test-component895.component';

describe('TestComponent895Component', () => {
  let component: TestComponent895Component;
  let fixture: ComponentFixture<TestComponent895Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent895Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
