import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2538Component } from './test-component2538.component';

describe('TestComponent2538Component', () => {
  let component: TestComponent2538Component;
  let fixture: ComponentFixture<TestComponent2538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2538Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
