import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2215Component } from './test-component2215.component';

describe('TestComponent2215Component', () => {
  let component: TestComponent2215Component;
  let fixture: ComponentFixture<TestComponent2215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
