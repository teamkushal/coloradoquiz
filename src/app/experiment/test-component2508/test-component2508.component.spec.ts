import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2508Component } from './test-component2508.component';

describe('TestComponent2508Component', () => {
  let component: TestComponent2508Component;
  let fixture: ComponentFixture<TestComponent2508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2508Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
