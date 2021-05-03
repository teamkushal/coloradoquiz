import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent268Component } from './test-component268.component';

describe('TestComponent268Component', () => {
  let component: TestComponent268Component;
  let fixture: ComponentFixture<TestComponent268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
