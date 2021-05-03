import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1972Component } from './test-component1972.component';

describe('TestComponent1972Component', () => {
  let component: TestComponent1972Component;
  let fixture: ComponentFixture<TestComponent1972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1972Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
