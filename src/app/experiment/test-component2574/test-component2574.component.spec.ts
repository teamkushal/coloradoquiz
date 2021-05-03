import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2574Component } from './test-component2574.component';

describe('TestComponent2574Component', () => {
  let component: TestComponent2574Component;
  let fixture: ComponentFixture<TestComponent2574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2574Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
