import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2473Component } from './test-component2473.component';

describe('TestComponent2473Component', () => {
  let component: TestComponent2473Component;
  let fixture: ComponentFixture<TestComponent2473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2473Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
