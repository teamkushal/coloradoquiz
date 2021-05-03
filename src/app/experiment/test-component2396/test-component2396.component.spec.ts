import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2396Component } from './test-component2396.component';

describe('TestComponent2396Component', () => {
  let component: TestComponent2396Component;
  let fixture: ComponentFixture<TestComponent2396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
