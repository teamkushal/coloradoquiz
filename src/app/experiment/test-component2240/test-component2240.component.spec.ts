import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2240Component } from './test-component2240.component';

describe('TestComponent2240Component', () => {
  let component: TestComponent2240Component;
  let fixture: ComponentFixture<TestComponent2240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
