import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1297Component } from './test-component1297.component';

describe('TestComponent1297Component', () => {
  let component: TestComponent1297Component;
  let fixture: ComponentFixture<TestComponent1297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1297Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
