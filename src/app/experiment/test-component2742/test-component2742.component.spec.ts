import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2742Component } from './test-component2742.component';

describe('TestComponent2742Component', () => {
  let component: TestComponent2742Component;
  let fixture: ComponentFixture<TestComponent2742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2742Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
