import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2878Component } from './test-component2878.component';

describe('TestComponent2878Component', () => {
  let component: TestComponent2878Component;
  let fixture: ComponentFixture<TestComponent2878Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2878Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
