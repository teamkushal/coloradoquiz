import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1092Component } from './test-component1092.component';

describe('TestComponent1092Component', () => {
  let component: TestComponent1092Component;
  let fixture: ComponentFixture<TestComponent1092Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1092Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
