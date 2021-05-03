import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2231Component } from './test-component2231.component';

describe('TestComponent2231Component', () => {
  let component: TestComponent2231Component;
  let fixture: ComponentFixture<TestComponent2231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
