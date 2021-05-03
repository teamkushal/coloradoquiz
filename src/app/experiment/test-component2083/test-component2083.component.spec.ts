import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2083Component } from './test-component2083.component';

describe('TestComponent2083Component', () => {
  let component: TestComponent2083Component;
  let fixture: ComponentFixture<TestComponent2083Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2083Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
