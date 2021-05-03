import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2829Component } from './test-component2829.component';

describe('TestComponent2829Component', () => {
  let component: TestComponent2829Component;
  let fixture: ComponentFixture<TestComponent2829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2829Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
