import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1111Component } from './test-component1111.component';

describe('TestComponent1111Component', () => {
  let component: TestComponent1111Component;
  let fixture: ComponentFixture<TestComponent1111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
