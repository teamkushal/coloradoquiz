import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2755Component } from './test-component2755.component';

describe('TestComponent2755Component', () => {
  let component: TestComponent2755Component;
  let fixture: ComponentFixture<TestComponent2755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2755Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
