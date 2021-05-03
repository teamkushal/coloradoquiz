import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1132Component } from './test-component1132.component';

describe('TestComponent1132Component', () => {
  let component: TestComponent1132Component;
  let fixture: ComponentFixture<TestComponent1132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
