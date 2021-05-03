import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2219Component } from './test-component2219.component';

describe('TestComponent2219Component', () => {
  let component: TestComponent2219Component;
  let fixture: ComponentFixture<TestComponent2219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
