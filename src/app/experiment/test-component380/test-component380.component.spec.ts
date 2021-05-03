import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent380Component } from './test-component380.component';

describe('TestComponent380Component', () => {
  let component: TestComponent380Component;
  let fixture: ComponentFixture<TestComponent380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
