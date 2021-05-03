import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1283Component } from './test-component1283.component';

describe('TestComponent1283Component', () => {
  let component: TestComponent1283Component;
  let fixture: ComponentFixture<TestComponent1283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1283Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
