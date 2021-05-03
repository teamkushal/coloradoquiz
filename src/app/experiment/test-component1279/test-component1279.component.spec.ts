import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1279Component } from './test-component1279.component';

describe('TestComponent1279Component', () => {
  let component: TestComponent1279Component;
  let fixture: ComponentFixture<TestComponent1279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
