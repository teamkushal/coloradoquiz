import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2587Component } from './test-component2587.component';

describe('TestComponent2587Component', () => {
  let component: TestComponent2587Component;
  let fixture: ComponentFixture<TestComponent2587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2587Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
