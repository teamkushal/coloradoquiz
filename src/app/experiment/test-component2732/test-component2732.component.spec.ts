import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2732Component } from './test-component2732.component';

describe('TestComponent2732Component', () => {
  let component: TestComponent2732Component;
  let fixture: ComponentFixture<TestComponent2732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2732Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
