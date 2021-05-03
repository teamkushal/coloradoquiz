import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2429Component } from './test-component2429.component';

describe('TestComponent2429Component', () => {
  let component: TestComponent2429Component;
  let fixture: ComponentFixture<TestComponent2429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2429Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
