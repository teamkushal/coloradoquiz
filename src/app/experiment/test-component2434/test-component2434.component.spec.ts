import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2434Component } from './test-component2434.component';

describe('TestComponent2434Component', () => {
  let component: TestComponent2434Component;
  let fixture: ComponentFixture<TestComponent2434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2434Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
