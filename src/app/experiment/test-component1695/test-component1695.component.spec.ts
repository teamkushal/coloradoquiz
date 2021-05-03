import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1695Component } from './test-component1695.component';

describe('TestComponent1695Component', () => {
  let component: TestComponent1695Component;
  let fixture: ComponentFixture<TestComponent1695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1695Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
