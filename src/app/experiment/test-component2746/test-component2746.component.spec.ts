import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2746Component } from './test-component2746.component';

describe('TestComponent2746Component', () => {
  let component: TestComponent2746Component;
  let fixture: ComponentFixture<TestComponent2746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2746Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
