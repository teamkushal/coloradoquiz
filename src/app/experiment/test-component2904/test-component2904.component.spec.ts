import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2904Component } from './test-component2904.component';

describe('TestComponent2904Component', () => {
  let component: TestComponent2904Component;
  let fixture: ComponentFixture<TestComponent2904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2904Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
