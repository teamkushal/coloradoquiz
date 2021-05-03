import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2235Component } from './test-component2235.component';

describe('TestComponent2235Component', () => {
  let component: TestComponent2235Component;
  let fixture: ComponentFixture<TestComponent2235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
