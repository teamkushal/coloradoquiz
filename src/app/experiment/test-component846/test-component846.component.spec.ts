import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent846Component } from './test-component846.component';

describe('TestComponent846Component', () => {
  let component: TestComponent846Component;
  let fixture: ComponentFixture<TestComponent846Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent846Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
