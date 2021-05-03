import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2053Component } from './test-component2053.component';

describe('TestComponent2053Component', () => {
  let component: TestComponent2053Component;
  let fixture: ComponentFixture<TestComponent2053Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2053Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
