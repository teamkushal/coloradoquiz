import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent815Component } from './test-component815.component';

describe('TestComponent815Component', () => {
  let component: TestComponent815Component;
  let fixture: ComponentFixture<TestComponent815Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent815Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
