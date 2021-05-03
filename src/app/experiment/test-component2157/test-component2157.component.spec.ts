import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2157Component } from './test-component2157.component';

describe('TestComponent2157Component', () => {
  let component: TestComponent2157Component;
  let fixture: ComponentFixture<TestComponent2157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
