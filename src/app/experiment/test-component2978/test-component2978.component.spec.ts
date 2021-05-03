import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2978Component } from './test-component2978.component';

describe('TestComponent2978Component', () => {
  let component: TestComponent2978Component;
  let fixture: ComponentFixture<TestComponent2978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2978Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
