import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2212Component } from './test-component2212.component';

describe('TestComponent2212Component', () => {
  let component: TestComponent2212Component;
  let fixture: ComponentFixture<TestComponent2212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
