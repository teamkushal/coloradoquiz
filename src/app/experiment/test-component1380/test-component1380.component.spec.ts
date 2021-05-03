import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1380Component } from './test-component1380.component';

describe('TestComponent1380Component', () => {
  let component: TestComponent1380Component;
  let fixture: ComponentFixture<TestComponent1380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
