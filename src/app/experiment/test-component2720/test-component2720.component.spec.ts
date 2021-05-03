import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2720Component } from './test-component2720.component';

describe('TestComponent2720Component', () => {
  let component: TestComponent2720Component;
  let fixture: ComponentFixture<TestComponent2720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2720Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
