import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2420Component } from './test-component2420.component';

describe('TestComponent2420Component', () => {
  let component: TestComponent2420Component;
  let fixture: ComponentFixture<TestComponent2420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
