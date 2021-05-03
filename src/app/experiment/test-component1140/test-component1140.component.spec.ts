import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1140Component } from './test-component1140.component';

describe('TestComponent1140Component', () => {
  let component: TestComponent1140Component;
  let fixture: ComponentFixture<TestComponent1140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
