import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2976Component } from './test-component2976.component';

describe('TestComponent2976Component', () => {
  let component: TestComponent2976Component;
  let fixture: ComponentFixture<TestComponent2976Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2976Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
