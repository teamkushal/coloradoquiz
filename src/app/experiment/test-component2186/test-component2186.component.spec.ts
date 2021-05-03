import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2186Component } from './test-component2186.component';

describe('TestComponent2186Component', () => {
  let component: TestComponent2186Component;
  let fixture: ComponentFixture<TestComponent2186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
