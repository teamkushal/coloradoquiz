import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2542Component } from './test-component2542.component';

describe('TestComponent2542Component', () => {
  let component: TestComponent2542Component;
  let fixture: ComponentFixture<TestComponent2542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2542Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
