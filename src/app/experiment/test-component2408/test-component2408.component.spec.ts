import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2408Component } from './test-component2408.component';

describe('TestComponent2408Component', () => {
  let component: TestComponent2408Component;
  let fixture: ComponentFixture<TestComponent2408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
