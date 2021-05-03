import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2384Component } from './test-component2384.component';

describe('TestComponent2384Component', () => {
  let component: TestComponent2384Component;
  let fixture: ComponentFixture<TestComponent2384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
