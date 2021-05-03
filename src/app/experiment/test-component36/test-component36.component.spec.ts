import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent36Component } from './test-component36.component';

describe('TestComponent36Component', () => {
  let component: TestComponent36Component;
  let fixture: ComponentFixture<TestComponent36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
