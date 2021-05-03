import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2802Component } from './test-component2802.component';

describe('TestComponent2802Component', () => {
  let component: TestComponent2802Component;
  let fixture: ComponentFixture<TestComponent2802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2802Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
