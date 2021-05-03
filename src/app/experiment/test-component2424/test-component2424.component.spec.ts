import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2424Component } from './test-component2424.component';

describe('TestComponent2424Component', () => {
  let component: TestComponent2424Component;
  let fixture: ComponentFixture<TestComponent2424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2424Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
