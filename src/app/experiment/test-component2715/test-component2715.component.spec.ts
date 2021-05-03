import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2715Component } from './test-component2715.component';

describe('TestComponent2715Component', () => {
  let component: TestComponent2715Component;
  let fixture: ComponentFixture<TestComponent2715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2715Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
