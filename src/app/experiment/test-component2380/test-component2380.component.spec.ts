import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2380Component } from './test-component2380.component';

describe('TestComponent2380Component', () => {
  let component: TestComponent2380Component;
  let fixture: ComponentFixture<TestComponent2380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
