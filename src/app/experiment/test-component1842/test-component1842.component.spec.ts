import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1842Component } from './test-component1842.component';

describe('TestComponent1842Component', () => {
  let component: TestComponent1842Component;
  let fixture: ComponentFixture<TestComponent1842Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1842Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
