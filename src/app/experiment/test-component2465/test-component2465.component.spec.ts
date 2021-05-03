import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2465Component } from './test-component2465.component';

describe('TestComponent2465Component', () => {
  let component: TestComponent2465Component;
  let fixture: ComponentFixture<TestComponent2465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2465Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
