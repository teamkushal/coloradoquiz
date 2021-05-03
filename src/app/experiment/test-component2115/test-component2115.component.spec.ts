import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2115Component } from './test-component2115.component';

describe('TestComponent2115Component', () => {
  let component: TestComponent2115Component;
  let fixture: ComponentFixture<TestComponent2115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
