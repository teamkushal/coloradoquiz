import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2881Component } from './test-component2881.component';

describe('TestComponent2881Component', () => {
  let component: TestComponent2881Component;
  let fixture: ComponentFixture<TestComponent2881Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2881Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
