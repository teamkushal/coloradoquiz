import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1580Component } from './test-component1580.component';

describe('TestComponent1580Component', () => {
  let component: TestComponent1580Component;
  let fixture: ComponentFixture<TestComponent1580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1580Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
