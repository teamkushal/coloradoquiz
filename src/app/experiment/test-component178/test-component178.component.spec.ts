import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent178Component } from './test-component178.component';

describe('TestComponent178Component', () => {
  let component: TestComponent178Component;
  let fixture: ComponentFixture<TestComponent178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
