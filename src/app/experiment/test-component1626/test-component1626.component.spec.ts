import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1626Component } from './test-component1626.component';

describe('TestComponent1626Component', () => {
  let component: TestComponent1626Component;
  let fixture: ComponentFixture<TestComponent1626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1626Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
