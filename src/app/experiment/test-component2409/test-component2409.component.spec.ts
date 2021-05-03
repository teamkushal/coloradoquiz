import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2409Component } from './test-component2409.component';

describe('TestComponent2409Component', () => {
  let component: TestComponent2409Component;
  let fixture: ComponentFixture<TestComponent2409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
