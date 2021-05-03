import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2254Component } from './test-component2254.component';

describe('TestComponent2254Component', () => {
  let component: TestComponent2254Component;
  let fixture: ComponentFixture<TestComponent2254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
