import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2552Component } from './test-component2552.component';

describe('TestComponent2552Component', () => {
  let component: TestComponent2552Component;
  let fixture: ComponentFixture<TestComponent2552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2552Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
