import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2758Component } from './test-component2758.component';

describe('TestComponent2758Component', () => {
  let component: TestComponent2758Component;
  let fixture: ComponentFixture<TestComponent2758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2758Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
