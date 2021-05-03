import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1220Component } from './test-component1220.component';

describe('TestComponent1220Component', () => {
  let component: TestComponent1220Component;
  let fixture: ComponentFixture<TestComponent1220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
