import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2887Component } from './test-component2887.component';

describe('TestComponent2887Component', () => {
  let component: TestComponent2887Component;
  let fixture: ComponentFixture<TestComponent2887Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2887Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
