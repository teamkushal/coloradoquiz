import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2391Component } from './test-component2391.component';

describe('TestComponent2391Component', () => {
  let component: TestComponent2391Component;
  let fixture: ComponentFixture<TestComponent2391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
