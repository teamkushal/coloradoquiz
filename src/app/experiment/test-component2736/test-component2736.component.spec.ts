import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2736Component } from './test-component2736.component';

describe('TestComponent2736Component', () => {
  let component: TestComponent2736Component;
  let fixture: ComponentFixture<TestComponent2736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2736Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
