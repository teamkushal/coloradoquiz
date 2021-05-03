import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent613Component } from './test-component613.component';

describe('TestComponent613Component', () => {
  let component: TestComponent613Component;
  let fixture: ComponentFixture<TestComponent613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent613Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
