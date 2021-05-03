import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2045Component } from './test-component2045.component';

describe('TestComponent2045Component', () => {
  let component: TestComponent2045Component;
  let fixture: ComponentFixture<TestComponent2045Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2045Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
