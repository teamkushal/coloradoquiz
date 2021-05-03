import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3895Component } from './test-component3895.component';

describe('TestComponent3895Component', () => {
  let component: TestComponent3895Component;
  let fixture: ComponentFixture<TestComponent3895Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3895Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
