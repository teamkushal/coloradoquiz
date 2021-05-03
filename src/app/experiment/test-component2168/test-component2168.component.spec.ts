import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2168Component } from './test-component2168.component';

describe('TestComponent2168Component', () => {
  let component: TestComponent2168Component;
  let fixture: ComponentFixture<TestComponent2168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
