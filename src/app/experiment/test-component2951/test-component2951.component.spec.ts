import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2951Component } from './test-component2951.component';

describe('TestComponent2951Component', () => {
  let component: TestComponent2951Component;
  let fixture: ComponentFixture<TestComponent2951Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2951Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
