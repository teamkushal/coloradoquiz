import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1535Component } from './test-component1535.component';

describe('TestComponent1535Component', () => {
  let component: TestComponent1535Component;
  let fixture: ComponentFixture<TestComponent1535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1535Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
