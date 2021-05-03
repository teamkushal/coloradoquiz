import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2641Component } from './test-component2641.component';

describe('TestComponent2641Component', () => {
  let component: TestComponent2641Component;
  let fixture: ComponentFixture<TestComponent2641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2641Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
