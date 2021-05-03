import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2341Component } from './test-component2341.component';

describe('TestComponent2341Component', () => {
  let component: TestComponent2341Component;
  let fixture: ComponentFixture<TestComponent2341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
