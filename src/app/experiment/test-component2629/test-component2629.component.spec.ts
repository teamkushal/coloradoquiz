import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2629Component } from './test-component2629.component';

describe('TestComponent2629Component', () => {
  let component: TestComponent2629Component;
  let fixture: ComponentFixture<TestComponent2629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2629Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
