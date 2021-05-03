import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2175Component } from './test-component2175.component';

describe('TestComponent2175Component', () => {
  let component: TestComponent2175Component;
  let fixture: ComponentFixture<TestComponent2175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
