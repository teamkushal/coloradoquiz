import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent427Component } from './test-component427.component';

describe('TestComponent427Component', () => {
  let component: TestComponent427Component;
  let fixture: ComponentFixture<TestComponent427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
