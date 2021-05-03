import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2051Component } from './test-component2051.component';

describe('TestComponent2051Component', () => {
  let component: TestComponent2051Component;
  let fixture: ComponentFixture<TestComponent2051Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2051Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
