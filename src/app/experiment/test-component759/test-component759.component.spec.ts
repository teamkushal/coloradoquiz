import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent759Component } from './test-component759.component';

describe('TestComponent759Component', () => {
  let component: TestComponent759Component;
  let fixture: ComponentFixture<TestComponent759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent759Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
