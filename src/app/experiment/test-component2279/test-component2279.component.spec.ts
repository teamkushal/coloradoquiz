import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2279Component } from './test-component2279.component';

describe('TestComponent2279Component', () => {
  let component: TestComponent2279Component;
  let fixture: ComponentFixture<TestComponent2279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
