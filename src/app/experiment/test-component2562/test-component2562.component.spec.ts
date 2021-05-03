import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2562Component } from './test-component2562.component';

describe('TestComponent2562Component', () => {
  let component: TestComponent2562Component;
  let fixture: ComponentFixture<TestComponent2562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2562Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
