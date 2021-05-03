import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent840Component } from './test-component840.component';

describe('TestComponent840Component', () => {
  let component: TestComponent840Component;
  let fixture: ComponentFixture<TestComponent840Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent840Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
