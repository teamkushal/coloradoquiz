import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2760Component } from './test-component2760.component';

describe('TestComponent2760Component', () => {
  let component: TestComponent2760Component;
  let fixture: ComponentFixture<TestComponent2760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2760Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
