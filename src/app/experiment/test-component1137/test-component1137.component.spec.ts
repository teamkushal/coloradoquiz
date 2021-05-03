import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1137Component } from './test-component1137.component';

describe('TestComponent1137Component', () => {
  let component: TestComponent1137Component;
  let fixture: ComponentFixture<TestComponent1137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
