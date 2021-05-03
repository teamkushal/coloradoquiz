import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2608Component } from './test-component2608.component';

describe('TestComponent2608Component', () => {
  let component: TestComponent2608Component;
  let fixture: ComponentFixture<TestComponent2608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2608Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
