import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2094Component } from './test-component2094.component';

describe('TestComponent2094Component', () => {
  let component: TestComponent2094Component;
  let fixture: ComponentFixture<TestComponent2094Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2094Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
