import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2494Component } from './test-component2494.component';

describe('TestComponent2494Component', () => {
  let component: TestComponent2494Component;
  let fixture: ComponentFixture<TestComponent2494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2494Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
