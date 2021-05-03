import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2753Component } from './test-component2753.component';

describe('TestComponent2753Component', () => {
  let component: TestComponent2753Component;
  let fixture: ComponentFixture<TestComponent2753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2753Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
