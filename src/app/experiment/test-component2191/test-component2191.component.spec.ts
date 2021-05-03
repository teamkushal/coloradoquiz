import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2191Component } from './test-component2191.component';

describe('TestComponent2191Component', () => {
  let component: TestComponent2191Component;
  let fixture: ComponentFixture<TestComponent2191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
