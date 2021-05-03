import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent359Component } from './test-component359.component';

describe('TestComponent359Component', () => {
  let component: TestComponent359Component;
  let fixture: ComponentFixture<TestComponent359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
