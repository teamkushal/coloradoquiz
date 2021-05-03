import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2263Component } from './test-component2263.component';

describe('TestComponent2263Component', () => {
  let component: TestComponent2263Component;
  let fixture: ComponentFixture<TestComponent2263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
