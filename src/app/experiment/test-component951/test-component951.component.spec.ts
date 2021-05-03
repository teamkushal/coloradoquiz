import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent951Component } from './test-component951.component';

describe('TestComponent951Component', () => {
  let component: TestComponent951Component;
  let fixture: ComponentFixture<TestComponent951Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent951Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
