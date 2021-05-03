import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2676Component } from './test-component2676.component';

describe('TestComponent2676Component', () => {
  let component: TestComponent2676Component;
  let fixture: ComponentFixture<TestComponent2676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2676Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
