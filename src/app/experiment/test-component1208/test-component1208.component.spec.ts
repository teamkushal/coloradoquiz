import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1208Component } from './test-component1208.component';

describe('TestComponent1208Component', () => {
  let component: TestComponent1208Component;
  let fixture: ComponentFixture<TestComponent1208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
