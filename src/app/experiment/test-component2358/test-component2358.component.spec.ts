import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2358Component } from './test-component2358.component';

describe('TestComponent2358Component', () => {
  let component: TestComponent2358Component;
  let fixture: ComponentFixture<TestComponent2358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
