import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2741Component } from './test-component2741.component';

describe('TestComponent2741Component', () => {
  let component: TestComponent2741Component;
  let fixture: ComponentFixture<TestComponent2741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2741Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
