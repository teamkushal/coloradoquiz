import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2667Component } from './test-component2667.component';

describe('TestComponent2667Component', () => {
  let component: TestComponent2667Component;
  let fixture: ComponentFixture<TestComponent2667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2667Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
