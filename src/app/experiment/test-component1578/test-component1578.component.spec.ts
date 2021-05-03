import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1578Component } from './test-component1578.component';

describe('TestComponent1578Component', () => {
  let component: TestComponent1578Component;
  let fixture: ComponentFixture<TestComponent1578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1578Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
