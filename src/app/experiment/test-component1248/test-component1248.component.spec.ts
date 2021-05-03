import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1248Component } from './test-component1248.component';

describe('TestComponent1248Component', () => {
  let component: TestComponent1248Component;
  let fixture: ComponentFixture<TestComponent1248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
