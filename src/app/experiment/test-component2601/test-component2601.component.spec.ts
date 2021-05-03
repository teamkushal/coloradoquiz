import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2601Component } from './test-component2601.component';

describe('TestComponent2601Component', () => {
  let component: TestComponent2601Component;
  let fixture: ComponentFixture<TestComponent2601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2601Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
