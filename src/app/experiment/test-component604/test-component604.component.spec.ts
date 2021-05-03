import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent604Component } from './test-component604.component';

describe('TestComponent604Component', () => {
  let component: TestComponent604Component;
  let fixture: ComponentFixture<TestComponent604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent604Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
