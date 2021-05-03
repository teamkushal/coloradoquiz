import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2113Component } from './test-component2113.component';

describe('TestComponent2113Component', () => {
  let component: TestComponent2113Component;
  let fixture: ComponentFixture<TestComponent2113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
