import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2801Component } from './test-component2801.component';

describe('TestComponent2801Component', () => {
  let component: TestComponent2801Component;
  let fixture: ComponentFixture<TestComponent2801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2801Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
