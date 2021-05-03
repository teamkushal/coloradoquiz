import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent391Component } from './test-component391.component';

describe('TestComponent391Component', () => {
  let component: TestComponent391Component;
  let fixture: ComponentFixture<TestComponent391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
