import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2084Component } from './test-component2084.component';

describe('TestComponent2084Component', () => {
  let component: TestComponent2084Component;
  let fixture: ComponentFixture<TestComponent2084Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2084Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
