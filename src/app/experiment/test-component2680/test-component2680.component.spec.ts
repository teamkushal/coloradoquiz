import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2680Component } from './test-component2680.component';

describe('TestComponent2680Component', () => {
  let component: TestComponent2680Component;
  let fixture: ComponentFixture<TestComponent2680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2680Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
