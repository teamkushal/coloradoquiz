import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2213Component } from './test-component2213.component';

describe('TestComponent2213Component', () => {
  let component: TestComponent2213Component;
  let fixture: ComponentFixture<TestComponent2213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
