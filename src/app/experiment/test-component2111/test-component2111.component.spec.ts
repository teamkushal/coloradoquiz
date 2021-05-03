import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2111Component } from './test-component2111.component';

describe('TestComponent2111Component', () => {
  let component: TestComponent2111Component;
  let fixture: ComponentFixture<TestComponent2111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
