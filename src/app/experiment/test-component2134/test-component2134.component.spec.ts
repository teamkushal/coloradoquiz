import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2134Component } from './test-component2134.component';

describe('TestComponent2134Component', () => {
  let component: TestComponent2134Component;
  let fixture: ComponentFixture<TestComponent2134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
