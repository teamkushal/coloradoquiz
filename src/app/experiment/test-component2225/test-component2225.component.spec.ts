import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2225Component } from './test-component2225.component';

describe('TestComponent2225Component', () => {
  let component: TestComponent2225Component;
  let fixture: ComponentFixture<TestComponent2225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
