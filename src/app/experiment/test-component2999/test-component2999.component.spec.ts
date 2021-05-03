import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2999Component } from './test-component2999.component';

describe('TestComponent2999Component', () => {
  let component: TestComponent2999Component;
  let fixture: ComponentFixture<TestComponent2999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
