import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2754Component } from './test-component2754.component';

describe('TestComponent2754Component', () => {
  let component: TestComponent2754Component;
  let fixture: ComponentFixture<TestComponent2754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2754Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
