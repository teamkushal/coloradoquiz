import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2320Component } from './test-component2320.component';

describe('TestComponent2320Component', () => {
  let component: TestComponent2320Component;
  let fixture: ComponentFixture<TestComponent2320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
