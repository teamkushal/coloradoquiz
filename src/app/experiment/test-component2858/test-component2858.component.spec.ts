import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2858Component } from './test-component2858.component';

describe('TestComponent2858Component', () => {
  let component: TestComponent2858Component;
  let fixture: ComponentFixture<TestComponent2858Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2858Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
