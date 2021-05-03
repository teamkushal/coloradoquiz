import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2080Component } from './test-component2080.component';

describe('TestComponent2080Component', () => {
  let component: TestComponent2080Component;
  let fixture: ComponentFixture<TestComponent2080Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2080Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
