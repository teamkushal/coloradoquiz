import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2652Component } from './test-component2652.component';

describe('TestComponent2652Component', () => {
  let component: TestComponent2652Component;
  let fixture: ComponentFixture<TestComponent2652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2652Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
