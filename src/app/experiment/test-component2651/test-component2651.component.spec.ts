import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2651Component } from './test-component2651.component';

describe('TestComponent2651Component', () => {
  let component: TestComponent2651Component;
  let fixture: ComponentFixture<TestComponent2651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2651Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
