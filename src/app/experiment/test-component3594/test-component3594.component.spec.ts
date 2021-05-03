import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3594Component } from './test-component3594.component';

describe('TestComponent3594Component', () => {
  let component: TestComponent3594Component;
  let fixture: ComponentFixture<TestComponent3594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3594Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
