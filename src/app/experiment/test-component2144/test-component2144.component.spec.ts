import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2144Component } from './test-component2144.component';

describe('TestComponent2144Component', () => {
  let component: TestComponent2144Component;
  let fixture: ComponentFixture<TestComponent2144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
