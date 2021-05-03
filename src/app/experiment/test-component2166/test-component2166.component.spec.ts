import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2166Component } from './test-component2166.component';

describe('TestComponent2166Component', () => {
  let component: TestComponent2166Component;
  let fixture: ComponentFixture<TestComponent2166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
