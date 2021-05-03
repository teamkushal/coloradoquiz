import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2383Component } from './test-component2383.component';

describe('TestComponent2383Component', () => {
  let component: TestComponent2383Component;
  let fixture: ComponentFixture<TestComponent2383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
