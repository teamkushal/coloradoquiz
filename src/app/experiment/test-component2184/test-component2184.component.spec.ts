import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2184Component } from './test-component2184.component';

describe('TestComponent2184Component', () => {
  let component: TestComponent2184Component;
  let fixture: ComponentFixture<TestComponent2184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
