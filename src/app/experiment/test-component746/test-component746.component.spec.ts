import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent746Component } from './test-component746.component';

describe('TestComponent746Component', () => {
  let component: TestComponent746Component;
  let fixture: ComponentFixture<TestComponent746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent746Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
