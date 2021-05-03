import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent711Component } from './test-component711.component';

describe('TestComponent711Component', () => {
  let component: TestComponent711Component;
  let fixture: ComponentFixture<TestComponent711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent711Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
