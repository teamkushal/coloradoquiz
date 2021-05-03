import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2349Component } from './test-component2349.component';

describe('TestComponent2349Component', () => {
  let component: TestComponent2349Component;
  let fixture: ComponentFixture<TestComponent2349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
