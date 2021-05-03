import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2210Component } from './test-component2210.component';

describe('TestComponent2210Component', () => {
  let component: TestComponent2210Component;
  let fixture: ComponentFixture<TestComponent2210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
