import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2656Component } from './test-component2656.component';

describe('TestComponent2656Component', () => {
  let component: TestComponent2656Component;
  let fixture: ComponentFixture<TestComponent2656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2656Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
