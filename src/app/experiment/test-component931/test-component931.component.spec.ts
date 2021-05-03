import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent931Component } from './test-component931.component';

describe('TestComponent931Component', () => {
  let component: TestComponent931Component;
  let fixture: ComponentFixture<TestComponent931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent931Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
