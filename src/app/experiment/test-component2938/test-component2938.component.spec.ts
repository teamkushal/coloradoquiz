import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2938Component } from './test-component2938.component';

describe('TestComponent2938Component', () => {
  let component: TestComponent2938Component;
  let fixture: ComponentFixture<TestComponent2938Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2938Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
