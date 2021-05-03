import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent769Component } from './test-component769.component';

describe('TestComponent769Component', () => {
  let component: TestComponent769Component;
  let fixture: ComponentFixture<TestComponent769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent769Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
