import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2944Component } from './test-component2944.component';

describe('TestComponent2944Component', () => {
  let component: TestComponent2944Component;
  let fixture: ComponentFixture<TestComponent2944Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2944Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
