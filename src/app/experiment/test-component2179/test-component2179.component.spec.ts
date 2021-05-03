import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2179Component } from './test-component2179.component';

describe('TestComponent2179Component', () => {
  let component: TestComponent2179Component;
  let fixture: ComponentFixture<TestComponent2179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
