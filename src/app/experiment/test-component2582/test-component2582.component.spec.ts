import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2582Component } from './test-component2582.component';

describe('TestComponent2582Component', () => {
  let component: TestComponent2582Component;
  let fixture: ComponentFixture<TestComponent2582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2582Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
