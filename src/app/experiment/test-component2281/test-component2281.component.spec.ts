import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2281Component } from './test-component2281.component';

describe('TestComponent2281Component', () => {
  let component: TestComponent2281Component;
  let fixture: ComponentFixture<TestComponent2281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
