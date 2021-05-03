import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent155Component } from './test-component155.component';

describe('TestComponent155Component', () => {
  let component: TestComponent155Component;
  let fixture: ComponentFixture<TestComponent155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
