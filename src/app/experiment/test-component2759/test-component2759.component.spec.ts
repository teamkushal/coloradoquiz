import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2759Component } from './test-component2759.component';

describe('TestComponent2759Component', () => {
  let component: TestComponent2759Component;
  let fixture: ComponentFixture<TestComponent2759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2759Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
