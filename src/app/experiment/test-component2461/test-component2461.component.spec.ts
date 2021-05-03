import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2461Component } from './test-component2461.component';

describe('TestComponent2461Component', () => {
  let component: TestComponent2461Component;
  let fixture: ComponentFixture<TestComponent2461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2461Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
