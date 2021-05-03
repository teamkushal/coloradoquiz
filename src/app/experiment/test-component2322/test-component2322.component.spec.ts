import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2322Component } from './test-component2322.component';

describe('TestComponent2322Component', () => {
  let component: TestComponent2322Component;
  let fixture: ComponentFixture<TestComponent2322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2322Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
