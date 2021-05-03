import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2109Component } from './test-component2109.component';

describe('TestComponent2109Component', () => {
  let component: TestComponent2109Component;
  let fixture: ComponentFixture<TestComponent2109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
