import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2347Component } from './test-component2347.component';

describe('TestComponent2347Component', () => {
  let component: TestComponent2347Component;
  let fixture: ComponentFixture<TestComponent2347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
