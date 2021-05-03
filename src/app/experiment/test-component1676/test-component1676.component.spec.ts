import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1676Component } from './test-component1676.component';

describe('TestComponent1676Component', () => {
  let component: TestComponent1676Component;
  let fixture: ComponentFixture<TestComponent1676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1676Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
