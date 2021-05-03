import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2927Component } from './test-component2927.component';

describe('TestComponent2927Component', () => {
  let component: TestComponent2927Component;
  let fixture: ComponentFixture<TestComponent2927Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2927Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
