import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2023Component } from './test-component2023.component';

describe('TestComponent2023Component', () => {
  let component: TestComponent2023Component;
  let fixture: ComponentFixture<TestComponent2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
