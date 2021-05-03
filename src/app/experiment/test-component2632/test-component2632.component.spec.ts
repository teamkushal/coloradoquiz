import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2632Component } from './test-component2632.component';

describe('TestComponent2632Component', () => {
  let component: TestComponent2632Component;
  let fixture: ComponentFixture<TestComponent2632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2632Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
