import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3236Component } from './test-component3236.component';

describe('TestComponent3236Component', () => {
  let component: TestComponent3236Component;
  let fixture: ComponentFixture<TestComponent3236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
