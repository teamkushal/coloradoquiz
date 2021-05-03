import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2400Component } from './test-component2400.component';

describe('TestComponent2400Component', () => {
  let component: TestComponent2400Component;
  let fixture: ComponentFixture<TestComponent2400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
