import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent983Component } from './test-component983.component';

describe('TestComponent983Component', () => {
  let component: TestComponent983Component;
  let fixture: ComponentFixture<TestComponent983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
