import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1241Component } from './test-component1241.component';

describe('TestComponent1241Component', () => {
  let component: TestComponent1241Component;
  let fixture: ComponentFixture<TestComponent1241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
