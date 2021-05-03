import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2114Component } from './test-component2114.component';

describe('TestComponent2114Component', () => {
  let component: TestComponent2114Component;
  let fixture: ComponentFixture<TestComponent2114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
