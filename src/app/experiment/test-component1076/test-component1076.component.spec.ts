import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1076Component } from './test-component1076.component';

describe('TestComponent1076Component', () => {
  let component: TestComponent1076Component;
  let fixture: ComponentFixture<TestComponent1076Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1076Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
