import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1513Component } from './test-component1513.component';

describe('TestComponent1513Component', () => {
  let component: TestComponent1513Component;
  let fixture: ComponentFixture<TestComponent1513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1513Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
