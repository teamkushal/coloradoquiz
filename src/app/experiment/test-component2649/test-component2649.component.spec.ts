import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2649Component } from './test-component2649.component';

describe('TestComponent2649Component', () => {
  let component: TestComponent2649Component;
  let fixture: ComponentFixture<TestComponent2649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2649Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
