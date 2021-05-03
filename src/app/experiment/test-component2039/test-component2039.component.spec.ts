import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2039Component } from './test-component2039.component';

describe('TestComponent2039Component', () => {
  let component: TestComponent2039Component;
  let fixture: ComponentFixture<TestComponent2039Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2039Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
