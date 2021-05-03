import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2165Component } from './test-component2165.component';

describe('TestComponent2165Component', () => {
  let component: TestComponent2165Component;
  let fixture: ComponentFixture<TestComponent2165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
