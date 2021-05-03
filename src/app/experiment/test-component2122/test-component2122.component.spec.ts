import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2122Component } from './test-component2122.component';

describe('TestComponent2122Component', () => {
  let component: TestComponent2122Component;
  let fixture: ComponentFixture<TestComponent2122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
