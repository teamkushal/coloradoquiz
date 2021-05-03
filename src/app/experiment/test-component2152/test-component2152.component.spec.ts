import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2152Component } from './test-component2152.component';

describe('TestComponent2152Component', () => {
  let component: TestComponent2152Component;
  let fixture: ComponentFixture<TestComponent2152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
