import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2468Component } from './test-component2468.component';

describe('TestComponent2468Component', () => {
  let component: TestComponent2468Component;
  let fixture: ComponentFixture<TestComponent2468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2468Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
