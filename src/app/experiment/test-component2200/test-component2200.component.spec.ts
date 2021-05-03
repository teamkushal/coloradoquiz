import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2200Component } from './test-component2200.component';

describe('TestComponent2200Component', () => {
  let component: TestComponent2200Component;
  let fixture: ComponentFixture<TestComponent2200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
