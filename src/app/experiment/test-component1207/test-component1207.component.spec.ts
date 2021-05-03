import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1207Component } from './test-component1207.component';

describe('TestComponent1207Component', () => {
  let component: TestComponent1207Component;
  let fixture: ComponentFixture<TestComponent1207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
