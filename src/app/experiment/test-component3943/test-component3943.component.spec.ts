import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3943Component } from './test-component3943.component';

describe('TestComponent3943Component', () => {
  let component: TestComponent3943Component;
  let fixture: ComponentFixture<TestComponent3943Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3943Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
