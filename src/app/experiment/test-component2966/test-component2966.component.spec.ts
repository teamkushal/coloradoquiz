import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2966Component } from './test-component2966.component';

describe('TestComponent2966Component', () => {
  let component: TestComponent2966Component;
  let fixture: ComponentFixture<TestComponent2966Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2966Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
