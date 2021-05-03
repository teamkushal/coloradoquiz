import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2033Component } from './test-component2033.component';

describe('TestComponent2033Component', () => {
  let component: TestComponent2033Component;
  let fixture: ComponentFixture<TestComponent2033Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2033Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
